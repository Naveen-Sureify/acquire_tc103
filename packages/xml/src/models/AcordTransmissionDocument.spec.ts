import { AcordTransmissionDocument } from './AcordTransmissionDocument';
import * as fs from 'fs';
import { ApplicationRasInputJson } from '../types';

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

describe('AcordTransmissionDocument', () => {
  it('works', async () => {
    const input: ApplicationRasInputJson = { ...relationsFull1InputJson };
    const model = new AcordTransmissionDocument(input);

    expect(model).toBeDefined();
    expect(model.toStructure()).toEqual({
      TobaccoPremiumBasis: 'No',
      Parties: [
        {
          FullName: 'DAVID JOHN JOSMORE',
          GovtID: '111-11-1111',
        },
        {
          Address: {
            Line2: 'SAN JOSE',
            Zip: '91822',
          },
          AddressStateTC: 'Alabama',
          City: 'SAN JOSE',
          GovtID: '111-11-1111',
          Phone: '(444) 343-4344',
        },
      ],
      Relations: [
        {
          InterestPercent: '50',
          RelationDescription: 'Custodian',
        },
        {
          RelationDescription: 'Custodian',
        },
      ],
      Holdings: [
        {
          Policy: {
            ReplacementType: {
              '@tc': 'OLI_REPLACEMENTTYPE',
              _id: 'Holdings[0].Policy.ReplacementType',
              _is_node: true,
              _response: 'No',
            },
          },
        },
      ],
    });
    // expect(model.toDocument()).toEqual({});
  });
});
