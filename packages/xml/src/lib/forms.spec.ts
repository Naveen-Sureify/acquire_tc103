import * as forms from './forms';

import * as fs from 'fs';
import { compile } from './compile';
import { ApplicationRasInputJson } from '../types';
import { removeWhitespace } from './utils';
import * as ras from './ras';

const image = fs.readFileSync(
  './packages/xml/fixtures/examples/forms/simple.png'
);

describe('forms', () => {
  it.skip('inject', async () => {
    const form = await forms.inject(
      './packages/xml/fixtures/examples/files/simple.png',
      'base64',
      ''
    );
    expect(form).toBe(image.toString('base64'));
  });

  it.skip('compile', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync(
          './packages/xml/fixtures/examples/forms/simple.input.json',
          'utf-8'
        )
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
      'fixtures/examples/forms/simple.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/forms/simple.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });

  it.skip('class', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync(
          './packages/xml/fixtures/examples/forms/simple.input.json',
          'utf-8'
        )
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
      'fixtures/examples/forms/simple.class.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/forms/simple.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });
});
