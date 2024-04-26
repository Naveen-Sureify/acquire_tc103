import {
  createExtractor,
  createExtractorFromRas,
  extractAnswer,
  extractQuestions,
  extractQuestionAnswerPairs,
  addAcordIds,
} from './ras';
import {
  ApplicationRasInputJson,
  QuestionAnswerPair,
  Question,
  DisplayType,
  QuestionType,
} from '../types';
import * as fs from 'fs';

const exampleRasInputJson0: ApplicationRasInputJson = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-0.input.json', 'utf-8')
);

const exampleRasInputJson0Flattened: Question[] = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/fixture-0.extract-questions.json',
    'utf-8'
  )
);

const full1RasInputJson: ApplicationRasInputJson = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-1.input.json', 'utf-8')
);

const full5RasInputJson: ApplicationRasInputJson = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-5.input.json', 'utf-8')
);

const full1RasInputJsonFlattened: Question[] = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/fixture-1.extract-questions.json',
    'utf-8'
  )
);

const fixture1ExtractedIdsManual: string[] = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/fixture-1.input.extracted-ids-manual.json',
    'utf-8'
  )
);

const fixture5ExtractedIdsManual: string[] = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/fixture-5.input.question-ids.json',
    'utf-8'
  )
);

const examplePairs: QuestionAnswerPair[] = [
  {
    question_id: '1',
    acord_id: '2',
    uuid: '1234',
    response: 'Male',
    answer: 'Male',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
  {
    question_id: '3',
    acord_id: '4',
    uuid: '2345',
    response: 'Female',
    answer: 'Female',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
];

const examplePairs2: QuestionAnswerPair[] = [
  {
    question_id: '4',
    sureify_id: 'firstname',
    uuid: '123456',
    response: 'Male',
    answer: 'Male',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
  {
    question_id: '1',
    sureify_id: 'Agent.firstname',
    uuid: '1234',
    response: 'Male',
    answer: 'Male',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
  {
    question_id: '2',
    sureify_id: 'Agent.lastname',
    uuid: '12345',
    response: 'Male',
    answer: 'Male',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
  {
    question_id: '3_1',
    sureify_id: 'Insured.firstname',
    uuid: '2345',
    response: 'Female',
    answer: 'Female',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
  {
    question_id: '3_2',
    sureify_id: 'Insured.firstname',
    uuid: '2345',
    response: 'Female',
    answer: 'Female',
    question_text: 'What is your gender?',
    question_type: QuestionType.text,
    display_type: DisplayType.text,
  },
];

describe('ras', () => {
  it.skip('createExtractor', () => {
    expect(typeof createExtractor(examplePairs)).toBe('function');
  });
  it.skip('createExtractorFromRas', () => {
    expect(typeof createExtractorFromRas(exampleRasInputJson0)).toBe(
      'function'
    );
  });
  it.skip('extract', () => {
    expect(extractAnswer(examplePairs, '1')).toBe('Male');
    expect(extractAnswer(examplePairs, '2')).toBe('Male');
    expect(extractAnswer(examplePairs, '1234')).toBe('Male');
    expect(extractAnswer(examplePairs, '3')).toBe('Female');
    expect(extractAnswer(examplePairs, '4')).toBe('Female');
    expect(extractAnswer(examplePairs, '2345')).toBe('Female');
    expect(extractAnswer(examplePairs, '')).toBe(undefined);
  });
  it.skip('extractor', () => {
    const extractor = createExtractor(examplePairs);
    expect(extractor('1')).toBe('Male');
    expect(extractor('2')).toBe('Male');
    expect(extractor('1234')).toBe('Male');
    expect(extractor('3')).toBe('Female');
    expect(extractor('4')).toBe('Female');
    expect(extractor('2345')).toBe('Female');
    expect(extractor('')).toBe(undefined);
  });
  it.skip('extractQuestions example-0', () => {
    const extracted = extractQuestions(exampleRasInputJson0);
    expect(extracted).toStrictEqual(exampleRasInputJson0Flattened);
  });
  it.skip('extractQuestions full-1', () => {
    const extracted = extractQuestions(full1RasInputJson);
    expect(extracted).toStrictEqual(full1RasInputJsonFlattened);
  });
  it.skip('extractQuestionAnswerPairs example-0', () => {
    expect(
      extractQuestionAnswerPairs(exampleRasInputJson0)
        .map((pair) => pair.question_id)
        .sort((a, b) => a.localeCompare(b))
    ).toEqual(
      exampleRasInputJson0Flattened
        .map((pair) => pair.question_id)
        .sort((a, b) => a.localeCompare(b))
    );
  });

  it.skip('extractQuestionAnswerPairs gets all questions', () => {
    const ids = extractQuestionAnswerPairs(full1RasInputJson)
      .map((p: QuestionAnswerPair) => p.question_id)
      .sort((a: string, b: string) => a.localeCompare(b));
    expect(
      fixture1ExtractedIdsManual.sort((a: string, b: string) =>
        a.localeCompare(b)
      )
    ).toEqual(ids);
  });

  it.skip('extractQuestionAnswerPairs gets all questions of Fixture-5', () => {
    const ids = extractQuestionAnswerPairs(full5RasInputJson)
      .map((p: QuestionAnswerPair) => p.question_id)
      .sort((a: string, b: string) => a.localeCompare(b));
    expect(
      fixture5ExtractedIdsManual.sort((a: string, b: string) =>
        a.localeCompare(b)
      )
    ).toEqual(ids);
  });

  it.skip('addAcordIds', () => {
    const pairs = addAcordIds(examplePairs2);
    expect(pairs).toEqual([
      {
        question_id: '4',
        sureify_id: 'firstname',
        uuid: '123456',
        response: 'Male',
        answer: 'Male',
        question_text: 'What is your gender?',
        question_type: 'text',
        display_type: 'text',
        acord_id: 'firstname',
      },
      {
        uuid: 'Insured.PartyType',
        question_id: 'Insured.PartyType',
        answer: 'Insured',
        response: 'Insured',
        question_text: '',
        question_type: 'text',
        display_type: 'text',
        sureify_id: 'Insured.PartyType',
        acord_id: 'Parties[0].PartyType',
      },
      {
        question_id: '3_1',
        sureify_id: 'Insured.firstname',
        uuid: '2345',
        response: 'Female',
        answer: 'Female',
        question_text: 'What is your gender?',
        question_type: 'text',
        display_type: 'text',
        acord_id: 'Parties[0].firstname',
      },
      {
        uuid: 'Insured.PartyType',
        question_id: 'Insured.PartyType',
        answer: 'Insured',
        response: 'Insured',
        question_text: '',
        question_type: 'text',
        display_type: 'text',
        sureify_id: 'Insured.PartyType',
        acord_id: 'Parties[1].PartyType',
      },
      {
        question_id: '3_2',
        sureify_id: 'Insured.firstname',
        uuid: '2345',
        response: 'Female',
        answer: 'Female',
        question_text: 'What is your gender?',
        question_type: 'text',
        display_type: 'text',
        acord_id: 'Parties[1].firstname',
      },
      {
        uuid: 'Agent.PartyType',
        question_id: 'Agent.PartyType',
        answer: 'Agent',
        response: 'Agent',
        question_text: '',
        question_type: 'text',
        display_type: 'text',
        sureify_id: 'Agent.PartyType',
        acord_id: 'Parties[2].PartyType',
      },
      {
        question_id: '1',
        sureify_id: 'Agent.firstname',
        uuid: '1234',
        response: 'Male',
        answer: 'Male',
        question_text: 'What is your gender?',
        question_type: 'text',
        display_type: 'text',
        acord_id: 'Parties[2].firstname',
      },
      {
        question_id: '2',
        sureify_id: 'Agent.lastname',
        uuid: '12345',
        response: 'Male',
        answer: 'Male',
        question_text: 'What is your gender?',
        question_type: 'text',
        display_type: 'text',
        acord_id: 'Parties[2].lastname',
      },
    ]);
  });
});
