import { getRepository } from 'typeorm';
import {
  ApplicationRasInputJson,
  QuestionAnswerPair,
  Question,
  QuestionType,
  DisplayType,
  Answer,
  PartiesLists,
  QuestionKeys,
} from '../types';
import { DatabaseService } from './database';

import * as utils from './utils';
import {
  ApplicationRas,
  PoliciesV2,
  Product,
  Quote,
  AcquireDataSource,
} from '@sureifylabs/acquire-models';

export const createExtractorFromRas = (
  input: ApplicationRasInputJson
): ((id: string) => any) => {
  const pairs: QuestionAnswerPair[] = extractQuestionAnswerPairs(input);
  // console.log(pairs);
  return createExtractor(pairs);
};

export const createExtractor = (
  pairs: QuestionAnswerPair[]
): ((id: string) => any) => {
  return (id: string) => extractAnswer(pairs, id);
};

export const extractPair = (
  pairs: QuestionAnswerPair[],
  id: string
): QuestionAnswerPair | undefined => {
  return pairs.find(
    (pair: QuestionAnswerPair) =>
      pair.acord_id === id ||
      pair.uuid === id ||
      pair.question_id === id ||
      pair.sureify_id === id
  );
};

export const extractAnswer = (
  pairs: QuestionAnswerPair[],
  id: string,
  key: keyof typeof QuestionKeys = 'response'
): any => {
  const pair = extractPair(pairs, id);
  if (key !== 'response') return pair?.[key];
  return pair?.question_type === 'singleselection'
    ? pair?.response?.label
    : pair?.response;
};

export const flattenQuestionsMatrixOnce = (
  questions: Question[][]
): Question[] => {
  return questions.reduce((acc, q) => [...acc, ...q], []);
};

export const flattenApplicationRasInputJsonQuestions = (
  questions: Question[] | Question[][]
): Question[] => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return questions?.reduce((acc: Question[], item: Question | Question[]) => {
    if (Array.isArray(item)) {
      return [
        ...acc,
        ...flattenApplicationRasInputJsonQuestions(
          item // flattenQuestionsMatrixOnce(item)
        ),
      ];
    }
    return [
      ...acc,
      item,
      ...flattenApplicationRasInputJsonQuestions(
        (item as unknown as Question)?.questions || []
      ),
      ...flattenApplicationRasInputJsonQuestions(
        (item as unknown as Question)?.original_questions || []
      ),
      ...flattenApplicationRasInputJsonQuestions(
        (item as unknown as Question)?.restore_questions || []
      ),
    ];
  }, [] as Question[]);
};

export const flattenApplicationRasInput = (
  input: ApplicationRasInputJson
): Question[] => {
  return flattenApplicationRasInputJsonQuestions(
    utils.convertNumberIndexedObjectToArray(
      input?.sureify?.questionnaire?.questions
    )
  );
};

export const extractQuestions = (
  input: ApplicationRasInputJson
): Question[] => {
  return flattenApplicationRasInput(input);
};

export const filterOnlyAnswered = (pair: QuestionAnswerPair): boolean =>
  !!pair.answer;

export const hasQuestionIdOrUUID = (pair: QuestionAnswerPair): boolean =>
  Boolean(pair.uuid || pair.question_id);

export const extractAnswerFromQuestion = (
  question: Question
): Answer | Answer[] => {
  if (!question?.response) return '';
  switch (question.question_type) {
    case QuestionType.text:
    case QuestionType.number:
    case QuestionType.date:
    case QuestionType.label:
      return question?.response;
    case QuestionType.singleselection:
      return question?.response?.label;
    case QuestionType.multiselection:
      return question?.response; // TODO - find structure for multiselection
    case QuestionType.group:
      if (question.display_type === DisplayType.list)
        return (question?.questions || []).map((q) =>
          extractAnswerFromQuestion(q)
        );
      return '';
    default:
      return question?.response;
  }
};

export const questionToQuestionAnswerPair = (
  question: Question
): QuestionAnswerPair => ({
  acord: question.acord,
  sureify_id: question.sureify_id,
  acord_id: question.acord_id,
  uuid: question.uuid,
  question_id: question.question_id,
  response: question.response,
  answer: extractAnswerFromQuestion(question),
  question_text: question.question_text,
  question_type: question.question_type,
  display_type: question.display_type,
});

export const filterUniquePairs = (
  pairs: QuestionAnswerPair[]
): QuestionAnswerPair[] => {
  const map = pairs.reduce(
    (acc: { [key: string]: QuestionAnswerPair }, pair: QuestionAnswerPair) => {
      if (acc[pair.question_id] !== undefined && pair.response === '') {
        return { ...acc };
      }
      return {
        ...acc,
        [pair.question_id]: pair,
      };
    },
    {} as { [key: string]: QuestionAnswerPair }
  );
  return Object.values(map);
};

export const extractQuestionAnswerPairs = (
  input: ApplicationRasInputJson
): QuestionAnswerPair[] => {
  const questions: Question[] = extractQuestions(input);
  const pairs = questions
    .map((question: Question) => questionToQuestionAnswerPair(question))
    // .filter(filterOnlyAnswered)
    .filter(hasQuestionIdOrUUID);
  return filterUniquePairs(pairs).sort((a, b) =>
    a.question_id.localeCompare(b.question_id) ? -1 : 1
  );
};

/*
 * Returns latest Party index, or -1 if the index is 0 or none is found
 **/
export const getLatestPartyIndex = (pairs: QuestionAnswerPair[]): number =>
  pairs
    .filter((pair) => pair.sureify_id?.match(/Parties\[\d+\]/))
    .map((pair) => pair?.sureify_id?.match(/\d+/)![0] ?? -1)
    .reduce(
      (latestPartyIndex, currentPartyIndex) =>
        Math.max(+currentPartyIndex, latestPartyIndex),
      0
    ) || -1;

/*
 * Add acord_id to all QuestionAnswerPairs and return updated pairs
 **/
export const addAcordIds = (
  pairs: QuestionAnswerPair[]
): QuestionAnswerPair[] => {
  const transformedData: PartiesLists = {
    Insured: {},
    Owner: {},
    Beneficiary: {},
    Contingent: {},
    ChildRider: {},
    Physician: {},
    Agent: {},
    Carrier: {},
    PB: {},
    CB: {},
    InFIRe: {}
  };

  const updatedPairs: QuestionAnswerPair[] = [];

  pairs.forEach((pair: QuestionAnswerPair) => {
    const parts = pair?.sureify_id?.split('.');
    if (parts && parts[0] in transformedData) {
      const key = parts[0] as keyof typeof transformedData;
      const index = pair?.question_id.split('_')[1] || '0';
      if (
        (key == 'Contingent' && index !== '0') ||
        (key == 'Physician' && index !== '0') ||
        (key == 'Beneficiary' && index !== '0') ||
        (key == 'PB' && index !== '0') ||
        (key == 'CB' && index !== '0') ||
        (key == 'InFIRe' && index !== '0') ||
        (key != 'Contingent' && key != 'Physician' && key != 'Beneficiary' && key != 'PB' && key != 'CB' && key != 'InFIRe')
      ) {
        if (transformedData[key][index]) {
          transformedData[key][index].push(pair);
        } else {
          transformedData[key][index] = [pair];
        }
      }
    } else {
      pair.acord_id = pair?.sureify_id;
      if(pair.acord_id){
        let temp = pair.acord_id.replace(/\n/g, ""); //to remove nextlines(\n) from sureify_id string
        pair.acord_id = temp;
      }
      updatedPairs.push(pair);
    }
  });

  let i = 0;

  Object.keys(transformedData).forEach((key) => {
    Object.values(transformedData[key as keyof typeof transformedData]).forEach(
      (partyQuestionAnswerPair) => {
        const partyType: QuestionAnswerPair = {
          uuid: `${key}.PartyType`,
          question_id: `${key}.PartyType`,
          answer: key,
          response: key,
          question_text: '',
          question_type: QuestionType.text,
          display_type: DisplayType.text,
          sureify_id: `${key}.PartyType`,
          acord_id: `Parties[${i}].PartyType`,
        };
        updatedPairs.push(partyType);
        partyQuestionAnswerPair.forEach((pair: QuestionAnswerPair) => {
          const sureify_id = pair?.sureify_id?.replace(
            `${key}`,
            `Parties[${i}]`
          );
          if (sureify_id) {
            //to remove nextlines
            pair.acord_id = sureify_id.replace(/\n/g, "");
          }
          updatedPairs.push(pair);
        });
        i++;
      }
    );
  });

  return updatedPairs;
};

export const databaseCalls = async (id: number) => {
  if (!AcquireDataSource.isInitialized) {
    await AcquireDataSource.initialize();
  }

  const databaseService = new DatabaseService(
    AcquireDataSource.getRepository(ApplicationRas),
    AcquireDataSource.getRepository(Quote),
    AcquireDataSource.getRepository(Product),
    AcquireDataSource.getRepository(PoliciesV2)
  );

  const userId = await databaseService.applicationRasUserId(id);
  const quoteData = await databaseService.quoteFindOne(userId);
  const productName = await databaseService.productFindOne(
    quoteData?.product_id as number
  );
  const policyNumber = databaseService.policyNumber(userId).toString();

  return {
    quoteData: { ...quoteData },
    productName,
    policyNumber,
  };
};
