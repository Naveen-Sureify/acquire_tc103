import { compile } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';
import { toXML } from 'to-xml';
import { fromXML } from 'from-xml';
import * as ras from './ras';

describe('Fixture-5 TC103 xml', () => {
  it.skip('compiles', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync('./packages/xml/fixtures/fixture-5.input.json', 'utf-8')
      ),
    };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {},
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    // const compiled = await compile(
    //   input,
    //   options,
    //   'fixtures/fixture-5.tc103.BH.to.NM.xml.ejs'
    // );

    // const compiledToJSON = fromXML(compiled[0]);

    // const compiledXML = toXML(compiledToJSON, (k: string, v: any) => {
    //   if (
    //     typeof v === 'object' &&
    //     v?.['@tc'] != '' &&
    //     v?.['@VendorCode'] != '' &&
    //     v?.['@id'] != ''
    //   ) {
    //     return v;
    //   } else if (typeof v !== 'object' && v != '') {
    //     //for removing direct empty entities
    //     return v;
    //   }
    // });

    // const compiledToJSON2 = fromXML(compiledXML);

    // const compiledXML2 = toXML(compiledToJSON2, (k: string, v: any) => {
    //   if (
    //     typeof v === 'object' &&
    //     v?.['@tc'] != '' &&
    //     v?.['@VendorCode'] != '' &&
    //     v?.['@id'] != ''
    //   ) {
    //     return v;
    //   } else if (typeof v !== 'object' && v != '') {
    //     //for removing direct empty entities
    //     return v;
    //   }
    // });

    // expect(removeWhitespace(compiledXML2)).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/fixture-5.tc103.copy.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });
});
