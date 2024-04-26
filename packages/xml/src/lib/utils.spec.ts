import * as utils from './utils';

describe('utils', () => {
  it.skip('removeWhitespace', () => {
    expect(utils.removeWhitespace('<> </>')).toEqual('<></>');
  });
  it.skip('getRowFromMatrixWithColumn', () => {
    expect(
      utils.getRowFromMatrixWithColumn(
        '1',
        [
          ['1', '2'],
          ['3', '4'],
        ],
        '3'
      )
    ).toStrictEqual(['3', '4']);
  });
  it.skip('getIndexOfColumn', () => {
    expect(utils.getIndexOfColumn([['1', '2']], '1')).toEqual(0);
  });
});
