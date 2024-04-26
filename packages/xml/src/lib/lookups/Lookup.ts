import { OLI_LU } from '../../types';
import { LookupValue } from '../../types';
import { lookup } from './lookups';
import tables from './tables';

export interface ILookup<OLI_LU> {
  table: OLI_LU;
  headers: string[];
  records: any[];
  constructor: () => any;
  serialize: () => string;
  tc: string;
  value: string;
  key: string;
  definition: string;
}

export interface ILookupTable<OLI_LU> {
  table: OLI_LU;
  headers: string[];
  records: any[];
  constructor: () => any;
}

export class Lookup<OLI_LU> {
  table: OLI_LU;
  headers: string[];
  records: any[];
  tc: string;
  value: string;
  key: string;
  definition: string;

  constructor(table: OLI_LU, lookupValue: LookupValue) {
    this.table = table;
    this.headers = tables.get(table as any)?.slice(0, 1)[0] as string[];
    this.records = tables.get(table as any)?.slice(1) as any[];
    const { key, tc, value, definition } = lookup(table as any, lookupValue);
    this.tc = tc;
    this.key = key;
    this.definition = definition;
    this.value = value;
  }
  serialize(): string {
    return '';
  }
}

export class LookupTable<T> {
  table: T;
  headers: string[];
  records: any[];
  constructor(table: OLI_LU) {
    this.table = table as unknown as T;
    this.headers = tables.get(table)?.slice(0, 1)[0] as string[];
    this.records = tables.get(table)?.slice(1) as any[];
  }
}
