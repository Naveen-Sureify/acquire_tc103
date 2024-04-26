import { auth, sheet, lookupGoogleSheet } from './sheets';
import { OLI_LU, LookupDataSetField } from '../types';

const sheetId = '1PitZzHFGWYxjEGk4oBPC9cymhZCkaZCXQYsWR-bkNTY';

describe.skip('sheets', () => {
  it.skip('enables lookup by value', async () => {
    const lookedUp = await lookupGoogleSheet(
      sheetId,
      OLI_LU.GENDER,
      LookupDataSetField.value,
      {
        [LookupDataSetField.tc]: '1',
      }
    );
    expect(lookedUp).toStrictEqual('Male');
  });

  it.skip('enables lookup by tc code', async () => {
    const lookedUp = await lookupGoogleSheet(
      sheetId,
      OLI_LU.GENDER,
      LookupDataSetField.tc,
      {
        value: 'Male',
      }
    );
    expect(lookedUp).toStrictEqual('1');
  });

  it.skip('auth', async () => {
    expect(await auth()).toBeDefined();
  });

  it.skip('sheet gets whole sheet', async () => {
    const data = await sheet(sheetId, OLI_LU.GENDER);
    expect(data).toStrictEqual({
      majorDimension: 'ROWS',
      range: 'GENDER!A1:Z1000',
      values: [
        ['value', 'key', 'tc', 'definition'],
        [
          'Female',
          'OLI_GENDER_FEMALE',
          '2',
          'A person with a specific set of physical anatomy (e.g. XX phenotype, vagina, ovaries, uterus, breasts, higher levels of estrogen, fine body hair) pursuant to this label.',
        ],
        [
          'Female to Male Transgender',
          'OLI_GENDER_FTMTRANS',
          '6',
          'A person who has undergone medical treatments to change their biological sex from Female To Male, often times to align it with their gender identity.Also referred to as FTM. After he has completed his transition, he may identify simply as male.',
        ],
        [
          'Intersex',
          'OLI_GENDER_INTERSEX',
          '5',
          "A person with a set of sexual anatomy that doesn't fit within the definition of female or male.",
        ],
        [
          'Issued on a combined rate blended from male and female',
          'OLI_GENDER_COMBINED',
          '4',
        ],
        [
          'Male',
          'OLI_GENDER_MALE',
          '1',
          'A person with a specific set of anatomy (e.g. XY phenotype, penis, testis, higher levels of testosterone, coarse body hair, facial hair) pursuant to this label.',
        ],
        [
          'Male to Female Transgender',
          'OLI_GENDER_MTFTRANS',
          '7',
          'A person who has undergone medical treatments to change their biological sex from Male To Female, often times to align it with their gender identity.Also referred to as MTF. After she has completed her transition, she may identify simply as female.',
        ],
        ['Other', 'OLI_OTHER', '2147483647'],
        ['Unisex', 'OLI_GENDER_UNISEX', '3'],
        ['Unknown', 'OLI_UNKNOWN', '0'],
      ],
    });
  });

  it.skip('sheet gets one column', async () => {
    const data = await sheet(sheetId, `${OLI_LU.GENDER}!A1:A1000`);
    expect(data).toStrictEqual({
      majorDimension: 'ROWS',
      range: 'GENDER!A1:A1000',
      values: [
        ['value'],
        ['Female'],
        ['Female to Male Transgender'],
        ['Intersex'],
        ['Issued on a combined rate blended from male and female'],
        ['Male'],
        ['Male to Female Transgender'],
        ['Other'],
        ['Unisex'],
        ['Unknown'],
      ],
    });
  });
});
