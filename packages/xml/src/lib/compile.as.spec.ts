import { compile } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';
import { fromXML } from 'from-xml';
import { toXML } from 'to-xml';
import * as ras from './ras';

describe('AllState TC103', () => {
  it.skip('compiles', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync(
          './packages/xml/fixtures/fixture-allstate.input.json',
          'utf-8'
        )
      ),
    };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {
        product_id: 1,
        face_amount: 200000,
        premium_amount: '26.13',
        external_uuid: '60ed16d2-748b-4e1c-8247-cd289dc72067',
        json_data: JSON.stringify({
          final_decision: 'DECLINE',
          bankName: 'JPMORGAN CHASE',
          paymentToken: 'b7a363b8-f8fc-4a02-ae90-644c352a5106',
        }),
        application_json_data: JSON.stringify({
          rate_class: 'PT',
        }),
      },
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    // const compiled = await compile(
    //   input,
    //   options,
    //   'fixtures/fixture-allstate.tc103.xml.ejs',
    //   1
    // );

  //   const compiledToJSON = fromXML(compiled[0]);

  //   const compiledXML = toXML(compiledToJSON, (k: string, v: any) => {
  //     if (
  //       typeof v === 'object' &&
  //       v?.['@tc'] != '' &&
  //       v?.['@VendorCode'] != '' &&
  //       v?.['@id'] != ''
  //     ) {
  //       return v;
  //     } else if (typeof v !== 'object' && v != '') {
  //       //for removing direct empty entities
  //       return v;
  //     }
  //   });

  //   expect(removeWhitespace(compiledXML)).toEqual(
  //     removeWhitespace(
  //       fs.readFileSync(
  //         './packages/xml/fixtures/fixture-allstate.tc103.xml',
  //         'utf-8'
  //       )
  //     )
  //   );
  });
});
