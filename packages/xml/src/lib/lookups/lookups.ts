import { LookupDataSetField, LookupValue, LookupResult } from '../../types';

import { OLI_LU } from '../../types';
import { LookupTable } from './Lookup';
import { getRowFromMatrixWithColumn } from '../utils';

export const lookup = (
  table: OLI_LU,
  value: LookupValue // value to match against
): LookupResult => {
  const lu = new LookupTable(table);
  const values = [lu.headers, ...lu.records];
  const fieldName = Object.keys(value)[0];
  const referenceFieldValue = Object.values(value)[0];
  const row = getRowFromMatrixWithColumn(
    fieldName,
    values,
    referenceFieldValue
  );
  const result = lu.headers.reduce(
    (acc, item, i) => ({ ...acc, [item]: (row && row[i]) || '' }),
    {} as LookupResult
  );
  return result;
};

export const lookupField = (
  table: OLI_LU,
  field: LookupDataSetField, // field to retrieve matching value for
  value: LookupValue // value to match against
): string => {
  const lu = lookup(table, value);
  return lu[field];
};
