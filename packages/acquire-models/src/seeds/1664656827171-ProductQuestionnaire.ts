/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductQuestionnaire1664656827171 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      INSERT INTO \`product_questionnaire\`
      (
        \`version\`,
        \`product_id\`,
        \`row_status\`,
        \`carrier_id\`,
        \`created_time\`,
        \`modified_time\`,
        \`name\`,
        \`description\`
      )
    VALUES
      (
        "0",
        1,
        1,
        1,
        NOW(),
        NULL,
        "Some Specific Questionnaire",
        "This questionnaire is about something specific."
      ),
      (
        "0",
        1,
        2,
        1,
        NOW(),
        NULL,
        "Some Specific Questionnaire",
        "This questionnaire is about something specific."
      ),
      (
        "0",
        2,
        1,
        1,
        NOW(),
        NULL,
        "Some Specific Questionnaire",
        "This questionnaire is about something specific."
      )
    ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      TRUNCATE TABLE \`product_questionnaire\`;`);
  }
}
