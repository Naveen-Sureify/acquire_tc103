/* eslint-disable */
const fs = require('fs');
const path = require('path');
import { MigrationInterface, QueryRunner } from 'typeorm';

const readSqlFile = (filepath: string): string[] => {
  return fs
    .readFileSync(path.resolve(__dirname, filepath))
    .toString()
    .replace(/\r?\n|\r/g, '')
    .split(';')
    .filter((query: string[]) => query?.length);
};

export class Questionn1664656978121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // console.log(__dirname);
    // const file = fs.readFileSync(
    //   path.resolve(__dirname, './acquire-questions.sql'),
    //   'utf8'
    // );
    const queries = readSqlFile('./acquire-questions.sql');

    for (let i = 0; i < queries.length; i++) {
      await queryRunner.query(queries[i]);
    }

    // console.log('file', file);
    // queryRunner.query(file);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE \`questions\`;`);
  }
}
