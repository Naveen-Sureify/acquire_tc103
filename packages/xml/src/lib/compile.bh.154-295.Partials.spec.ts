import { compile } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';
import * as ras from './ras';

describe('BrightHouse TC103 154-295 Partials', () => {
  it.skip('compiles', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync('./packages/xml/fixtures/fixture-1.input.json', 'utf-8')
      ),
    };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {},
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    const compiled = await compile(
      input,
      options,
      'fixtures/fixture-1.tc103.no-attachments.154-295.Partials.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/fixture-1.tc103.no-attachments.154-295.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });
});
