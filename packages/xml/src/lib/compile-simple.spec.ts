import { compileSimple } from './compile';
import { removeWhitespace } from './utils';
import * as fs from 'fs';
import * as ras from './ras';
import { ApplicationRasInputJson } from '../types';
import { createExtractorFromRas } from './ras';

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

describe('compile-simple', () => {
  it.skip('compiles fixture-1.tc103', async () => {
    const data: ejs.Data = { ...full1InputJson, ...missing1InputJson };
    const options: ejs.Options = {};
    const compiled = await compileSimple(
      data,
      full1InputJson,
      options,
      'fixtures/fixture-1.tc103.no-attachments.xml.ejs'
    );

    expect(removeWhitespace(compiled)).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/fixture-1.tc103.no-attachments.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('compiles fixture-4', async () => {
    const data: ejs.Data = {
      TXLife: {
        UserAuthRequest: {
          UserLoginName: {
            value: 'Life Co',
          },
          UserPswd: {
            CryptType: 'sha256',
            Pswd: 'password',
          },
        },
      },
    };
    const options: ejs.Options = {};
    const compiled = await compileSimple(
      data,
      full1InputJson as ApplicationRasInputJson,
      options,
      'fixtures/fixture-4.no-attachments.xml.ejs'
    );

    expect(removeWhitespace(compiled)).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/fixture-4.no-attachments.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('compiles example-partials', async () => {
    const data: ejs.Data = {
      TXLife: {
        UserAuthRequest: {
          UserLoginName: {
            value: 'Life Co',
          },
          UserPswd: {
            CryptType: 'sha256',
            Pswd: 'password',
          },
        },
        SourceInfo: {
          CreationDate: { value: '2022-04-19' },
          CreationTime: { value: '07:31:33' },
          SourceInfoName: { value: 'iPipeline' },
        },
      },
    };
    const options: ejs.Options = {};
    const compiled = await compileSimple(
      { data },
      full1InputJson as ApplicationRasInputJson,
      options,
      'fixtures/example-partials.root.xml.ejs'
    );
    expect(removeWhitespace(compiled)).toStrictEqual(
      removeWhitespace(
        fs.readFileSync('./packages/xml/fixtures/example-partials.xml', 'utf-8')
      )
    );
  });

  it.skip('compiles fixture-4', async () => {
    const data: ejs.Data = {
      TXLife: {
        UserAuthRequest: {
          UserLoginName: {
            value: 'Life Co',
          },
          UserPswd: {
            CryptType: 'sha256',
            Pswd: 'password',
          },
        },
      },
    };
    const options: ejs.Options = {};
    expect(
      removeWhitespace(
        await compileSimple(
          data,
          full1InputJson as ApplicationRasInputJson,
          options,
          'fixtures/fixture-4.no-attachments.xml.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/fixture-4.no-attachments.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('injects locals', async () => {
    const data: ejs.Data = {
      CreatedBySystem: 'LifetimeACQUIRE',
    };
    const options: ejs.Options = {};
    expect(
      removeWhitespace(
        await compileSimple(
          { ...data },
          full1InputJson as ApplicationRasInputJson,
          options,
          'fixtures/examples/data/basic.example.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/examples/data/basic.fixture.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('transforms', async () => {
    const data: ejs.Data = {
      FirstName: 'John',
      LastName: 'Doe',
    };
    const options: ejs.Options = {};
    expect(
      removeWhitespace(
        await compileSimple(
          { ...data },
          full1InputJson as ApplicationRasInputJson,
          options,
          'fixtures/examples/transforms/concat.example.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/examples/transforms/concat.fixture.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('lookups (local csv)', async () => {
    const data: ejs.Data = {
      Gender: 'Male',
    };
    const options: ejs.Options = {};
    expect(
      removeWhitespace(
        await compileSimple(
          data,
          full1InputJson as ApplicationRasInputJson,
          options,
          'fixtures/examples/lookups/lookup.tc.example.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/examples/lookups/lookup.tc.fixture.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('lookups (sheets)', async () => {
    const data: ejs.Data = {
      Gender: 'Male',
    };
    const options: ejs.Options = {};
    expect(
      removeWhitespace(
        await compileSimple(
          data,
          full1InputJson as ApplicationRasInputJson,
          options,
          'fixtures/examples/lookups/lookup.tc.sheets.example.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/examples/lookups/lookup.tc.sheets.fixture.xml',
          'utf-8'
        )
      )
    );
  });

  it.skip('ras', async () => {
    const data: ejs.Data = {
      Gender: 'Male',
    };
    const options: ejs.Options = {};

    expect(
      removeWhitespace(
        await compileSimple(
          {
            ...data,
            ras: { extract: createExtractorFromRas(exampleRasInputJson0) },
          },
          exampleRasInputJson0 as ApplicationRasInputJson,
          options,
          'fixtures/examples/ras/basic.example.ejs'
        )
      )
    ).toEqual(
      removeWhitespace(
        fs.readFileSync(
          './packages/xml/fixtures/examples/ras/basic.fixture.xml',
          'utf-8'
        )
      )
    );
  });
});
