import { set } from 'lodash';
import { addAcordIds, extractQuestionAnswerPairs } from '../lib/ras';
import {
  ApplicationRasInputJson,
  AcordTransmissionValues,
  QuestionAnswerPair,
  TXLife,
  SureifyApplicationModel,
} from '../types';

// const isPairPartOfListQuestion = (pair: QuestionAnswerPair) => {
//   return pair.question_id.match(/_\d$/);
// };

export class AcordTransmissionDocument {
  public input: ApplicationRasInputJson;
  public values: TXLife;
  pairs: QuestionAnswerPair[];

  constructor(input: ApplicationRasInputJson) {
    this.input = input;
    this.pairs = extractQuestionAnswerPairs(input);
    this.pairs = addAcordIds(this.pairs);
    this.values = this.toStructure();
  }

  // this is a little gross
  toStructure(): SureifyApplicationModel {
    return this.pairs
      .sort((a: QuestionAnswerPair, b: QuestionAnswerPair) =>
        (a?.acord_id || '').localeCompare(b?.acord_id || '')
      )
      .reduce((acc, pair) => {
        const next: any = { ...acc };
        if (!pair.acord_id) {
          return next;
        }
        set(next, pair.acord_id as string, pair.response);
        if (pair.acord) {
          set(next, pair.acord_id as string, {
            ...pair.acord,
            _response: pair.response,
            _is_node: true,
          });
        }
        if (pair.acord_id && pair.question_type === 'singleselection') {
          pair.acord
            ? set(next, pair.acord_id as string, {
              ...pair.acord,
              _response: pair.response?.acord_id
                  ? pair.response?.acord_id
                  : pair.response?.label,
              _is_node: true,
            })
            : set(
              next,
                pair.acord_id as string,
                pair.response?.acord_id
                  ? pair.response?.acord_id
                  : pair.response?.label
            );
        }
        return next;
      }, {});
  }

  toDocument(): AcordTransmissionValues {
    return {
      request: { input: { txLife: { TXLife: this.values } } },
    };
  }
}
