import { compile } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';
import * as ras from './ras';

describe('BrightHouse TC103', () => {
  it.skip('compiles 1-35', async () => {
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
      'fixtures/fixture-1.tc103.no-attachments.1-36.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/fixture-1.tc103.no-attachments.1-36.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });

  it.skip('compiles 80-127', async () => {
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
      'fixtures/fixture-1.tc103.no-attachments.80-127.xml.ejs',
      1
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/fixture-1.tc103.no-attachments.80-127.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });
});
