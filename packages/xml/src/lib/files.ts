/* eslint-disable @typescript-eslint/no-empty-function */
import * as fs from 'node:fs';

export const read = () => {};
export const write = () => {};
export const injectFile = () => {};
export const inject = async (
  filePath: string,
  format: BufferEncoding
): Promise<string | null> => {
  return fs.readFileSync(filePath).toString(format);
};

export const b64encode = () => {};
