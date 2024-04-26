/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Questionnaire1664656873220 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO \`questionnaire\`
        (
          \`version\`,
          \`product_questionnaire_id\`,
          \`questionnaire_id_string\`,
          \`row_status\`,
          \`carrier_id\`,
          \`created_time\`,
          \`modified_time\`,
          \`effective_from\`,
          \`quote_product_id\`
        )
      VALUES
        (
          "0",
          1,
          "Questionnaire1",
          1,
          1,
          NOW(),
          NULL,
          '2019-01-05 10:20:30',
          1
        ),
        (
          "1",
          1,
          "Questionnaire1",
          1,
          1,
          NOW(),
          NULL,
          '2020-03-10 11:22:33',
          1
        ),
        (
          "2",
          1,
          "Questionnaire1",
          1,
          1,
          NOW(),
          NULL,
          '2020-05-10 05:04:03',
          1
        )
      ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE \`questionnaire\`;`);
  }
}
