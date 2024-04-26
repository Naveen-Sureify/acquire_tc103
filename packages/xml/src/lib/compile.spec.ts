import { compile } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';
import * as ras from './ras';

const exampleRasInputJson0 = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-0.input.json', 'utf-8')
) as ApplicationRasInputJson;

const full1InputJson = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-1.input.json', 'utf-8')
);

const missing1InputJson = JSON.parse(
  fs.readFileSync('./packages/xml/fixtures/fixture-1.missing.json', 'utf-8')
);

const relationsFull1InputJson = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/examples/relations/full.input.json',
    'utf-8'
  )
);

const lists1InputJson = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/examples/lists/parties.input.json',
    'utf-8'
  )
);

const listsSimpleInputJson = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/examples/lists/simple.input.json',
    'utf-8'
  )
);

const sidecars1InputJson = JSON.parse(
  fs.readFileSync(
    './packages/xml/fixtures/examples/sidecars/simple.input.json',
    'utf-8'
  )
);

describe('compile', () => {
  it.skip('compiles with simple relations', async () => {
    const input: ApplicationRasInputJson = {
      ...JSON.parse(
        fs.readFileSync(
          './packages/xml/fixtures/examples/relations/simple.input.json',
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
      'fixtures/examples/relations/simple.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/relations/simple.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });

  it.skip('compiles with relations', async () => {
    const input: ApplicationRasInputJson = { ...relationsFull1InputJson };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {},
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    const compiled = await compile(
      input,
      options,
      'fixtures/examples/relations/full.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/relations/full.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });

  describe('compile', () => {
    it.skip('compiles with simple lists', async () => {
      const input: ApplicationRasInputJson = { ...listsSimpleInputJson };
      const options: ejs.Options = {};

      jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
        quoteData: {},
        productName: 'Traditional Term Life',
        policyNumber: 'U110006697',
      });

      const compiled = await compile(
        input,
        options,
        'fixtures/examples/lists/simple.xml.ejs'
      );

      // expect(removeWhitespace(compiled[0])).toEqual(
      //   removeWhitespace(
      //     fs.readFileSync(
      //       './packages/xml/fixtures/examples/lists/simple.xml',
      //       'utf-8'
      //     )
      //   )
      // );
    });

    it.skip('compiles with complex lists (Parties)', async () => {
      const input: ApplicationRasInputJson = { ...lists1InputJson };
      const options: ejs.Options = {};

      jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
        quoteData: {},
        productName: 'Traditional Term Life',
        policyNumber: 'U110006697',
      });

      const compiled = await compile(
        input,
        options,
        'fixtures/examples/lists/parties.xml.ejs'
      );

      // expect(removeWhitespace(compiled[0])).toEqual(
      //   removeWhitespace(
      //     fs.readFileSync(
      //       './packages/xml/fixtures/examples/lists/parties.xml',
      //       'utf-8'
      //     )
      //   )
      // );
    });
  });

  it.skip('compiles with sidecars', async () => {
    const input: ApplicationRasInputJson = { ...sidecars1InputJson };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {},
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    const compiled = await compile(
      input,
      options,
      'fixtures/examples/sidecars/simple.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/sidecars/simple.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });

  it.skip('compiles with files injection simple', async () => {
    const input: ApplicationRasInputJson = { ...sidecars1InputJson };
    const options: ejs.Options = {};

    jest.spyOn(ras, 'databaseCalls').mockResolvedValue({
      quoteData: {},
      productName: 'Traditional Term Life',
      policyNumber: 'U110006697',
    });

    const compiled = await compile(
      input,
      options,
      'fixtures/examples/files/simple.xml.ejs'
    );

    // expect(removeWhitespace(compiled[0])).toEqual(
    //   removeWhitespace(
    //     fs.readFileSync(
    //       './packages/xml/fixtures/examples/files/simple.xml',
    //       'utf-8'
    //     )
    //   )
    // );
  });
});
