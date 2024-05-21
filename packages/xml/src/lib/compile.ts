import * as ejs from 'ejs';
import * as fs from 'fs';
import dayjs from 'dayjs';

import { fromXML } from 'from-xml';
import { toXML } from 'to-xml';

import * as transforms from './transforms';
import * as lookups from './lookups';
import * as sheets from './sheets';
import * as utils from './utils';
import * as files from './files';
import * as types from '../types';
import * as forms from './forms';
import {
  ApplicationSchema,
  ApplicationFormat,
  ApplicationRasInputJson,
  QuestionKeys,
} from '../types';
import { AcordTransmissionDocument } from '../models/AcordTransmissionDocument';
import {
  createExtractorFromRas,
  extractQuestionAnswerPairs,
  extractPair,
  extractAnswer,
  addAcordIds,
  databaseCalls,
} from './ras';

const defaultCompileOpts = {
  root: './packages/xml/',
  views: [
    './packages/xml/fixtures',
    './packages/xml/fixtures/partials',
    './packages/xml/fixtures/examples',
    './packages/xml/fixtures/examples/data',
    './packages/xml/fixtures/examples/lookups',
    './packages/xml/fixtures/examples/lists',
    './packages/xml/fixtures/examples/transforms',
    './packages/xml/fixtures/examples/ras',
    './packages/xml/fixtures/examples/sidecars',
    './packages/xml/src/templates',
    './packages/xml/src/templates/partials',
  ],
  async: true,
};

export async function compile(
  input: ApplicationRasInputJson,
  options: ejs.Options,
  template = '',
  id = 1
): Promise<string> {
  const opts = {
    ...defaultCompileOpts,
    ...(options || {}),
  };

  const templateLoaded: string = fs.readFileSync(
    `${opts?.root || ''}${template}`,
    'utf-8'
  );

  const model = new AcordTransmissionDocument(input);

  const pairs = extractQuestionAnswerPairs(input);
  const pairsWithAcordIds = addAcordIds(pairs);
  const extract = createExtractorFromRas(input);

  // const modelsData = await databaseCalls(id);
  // modelsData.quoteData.json_data = JSON.parse(
  //   modelsData?.quoteData?.json_data || '{}'
  // );
  // modelsData.quoteData.application_json_data = JSON.parse(
  //   modelsData?.quoteData?.application_json_data || '{}'
  // );

  const context = {
    acord: model.values,
    // model: modelsData,
    transforms,
    lookups,
    sheets,
    files,
    types,
    forms,
    utils: {
      dayjs,
      generate: {
        id: new utils.NumericAutoIncrementIdGenerator(new Date().getTime()),
        uuid: new utils.StringIdGenerator('default'),
      },
      toXML,
    },
    ras: {
      extract,
      pairsWithAcordIds,
      extractAnswerByKey: (id: string, key: keyof typeof QuestionKeys) => {
        return extractAnswer(pairsWithAcordIds, id, key);
      },
      injectAcord: (id: string) => {
        const pair = extractPair(pairsWithAcordIds, id);
        return toXML(pair?.acord?.nodes, (k: string, v: any) => {
          if (utils.hasTemplateLiteral(v))
            return transforms.interpolate(v, {
              this: { ...pair },
            });
          return v;
        });
      },
    },
  };

  const rendered: string = ejs.render(
    templateLoaded,
    { ...context, cx: context },
    { ...opts }
  ) as string;

  return rendered;
}

export async function compileSimple(
  data: ejs.Data,
  input: ApplicationRasInputJson,
  options: ejs.Options,
  template = ''
): Promise<string> {
  const opts = {
    ...defaultCompileOpts,
    ...(options || {}),
  };

  const templateLoaded: string = fs.readFileSync(
    `${opts?.root || ''}${template}`,
    'utf-8'
  );

  const context = {
    ...(data || {}),
    transforms,
    lookups,
    sheets,
    utils: {
      dayjs,
      generate: {
        id: new utils.NumericAutoIncrementIdGenerator(new Date().getTime()),
        uuid: new utils.StringIdGenerator('default'),
      },
    },
    ras: {
      extract: createExtractorFromRas(input),
      pairs: extractQuestionAnswerPairs(input),
    },
  };

  const rendered: string = ejs.render(
    templateLoaded,
    { ...context, cx: context },
    { ...opts }
  ) as string;

  return rendered;
}

export async function compileApplicationById(
  id: number,
  schema: ApplicationSchema = ApplicationSchema.TC103,
  format: ApplicationFormat = ApplicationFormat.XML,
  options?: ejs.Options
): Promise<string> {
  const input: ApplicationRasInputJson = JSON.parse(
    fs.readFileSync(`./packages/xml/templates/${id}.input.json`, 'utf-8')
  );
  // TODO -- these values must be resolved from the Acquire backend
  // or passed as parameters
  const missing: JSON = JSON.parse(
    fs.readFileSync(
      `./packages/xml/templates/${id}.missing-values.json`,
      'utf-8'
    )
  );
  const data = {
    ...input,
    missing,
  } as ejs.Data;

  const template = `templates/${id}.template.xml.ejs`;

  const rendered: string = await compileSimple(
    data,
    input,
    options || {},
    template
  );
  if (format === ApplicationFormat.JSON) {
    return fromXML(rendered);
  } else {
    return rendered;
  }
}
