import { lookup } from './lookups';
import { LookupDataSetField } from '../../types';
import { OLI_LU } from '../../types';

describe.skip('lookups', () => {
  it('enables lookup by value', async () => {
    const lookedUp = await lookup(OLI_LU.GENDER, {
      [LookupDataSetField.tc]: '1',
    });
    expect(lookedUp.value).toStrictEqual('Male');
  });

  it('enables lookup by tc code', async () => {
    const lookedUp = await lookup(OLI_LU.GENDER, {
      value: 'Male',
    });
    expect(lookedUp.tc).toStrictEqual('1');
  });
});
