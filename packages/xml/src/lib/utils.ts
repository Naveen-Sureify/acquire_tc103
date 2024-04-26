import * as uuid from 'uuid';

export const removeWhitespace = (str = ''): string => {
  return str.replace(/>\s*/g, '>').replace(/\s*</g, '<');
};

export const getRowFromMatrixWithColumn = (
  column: string,
  matrix: string[][],
  value: string
): string[] | null => {
  const index = getIndexOfColumn(matrix, column);
  for (const row of matrix) {
    if (row[index]?.toUpperCase() === value?.toUpperCase()) {
      return row;
    }
  }
  return null;
};

export const getIndexOfColumn = (
  matrix: string[][],
  column: string
): number => {
  return matrix[0].findIndex((col) => col === column);
};

export class NumericAutoIncrementIdGenerator {
  seed: number;
  ids: number[];

  constructor(seed: number) {
    this.seed = seed;
    this.ids = [this.seed];
  }

  create(): number {
    return this.previous() + 1;
  }

  previous(): number {
    return this.ids[this.ids.length - 1];
  }

  next(): number {
    this.ids.push(this.create());
    return this.previous();
  }
}

export class StringIdGenerator {
  seed: string;
  ids: string[];

  constructor(key = 'default', seed: string = uuid.v4()) {
    this.seed = seed;
    this.ids = [uuid.v5(key, this.seed)];
  }

  create(key: string = uuid.v4()): string {
    return uuid.v5(key, this.seed);
  }

  previous(): string {
    return this.ids[this.ids.length - 1];
  }

  next(key: string): string {
    this.ids.push(this.create(key));
    return this.previous();
  }
}

export const convertNumberIndexedObjectToArray = (
  o: object | Array<object>
) => {
  return Array.isArray(o) ? o : Object.values(o);
};

export const hasTemplateLiteral = (str: string): boolean =>
  typeof str === 'string' && str.search(/\${(.*?)\}/g) > -1;
