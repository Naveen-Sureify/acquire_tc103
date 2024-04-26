import { OLI_LU, LookupDataSetField } from '../types';
import { getRowFromMatrixWithColumn, getIndexOfColumn } from './utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { google } = require('googleapis');

export const lookupGoogleSheet = async (
  id: string,
  table: OLI_LU,
  field: LookupDataSetField, // key to lookup
  value: { [key in LookupDataSetField]?: string } // value to match against
): Promise<any> => {
  const matrix = await sheet(id, `${table as unknown as string}!A1:Z1000`);
  const row = getRowFromMatrixWithColumn(
    Object.keys(value)[0],
    matrix.values,
    Object.values(value)[0]
  );
  const index = getIndexOfColumn(matrix.values, field);
  return row && row[index];
};

export const auth = async () => {
  //Function for authentication object
  const authModule = new google.auth.GoogleAuth({
    keyFile: 'packages/xml/google-key.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  //Create client instance for auth
  const authClient = await authModule.getClient();

  //Instance of the Sheets API
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  return {
    auth: authModule,
    authClient,
    sheets,
  };
};

export async function sheet(id: string, range: string | OLI_LU) {
  const { sheets } = await auth();

  const getRows = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range,
  });

  return getRows.data;
}
