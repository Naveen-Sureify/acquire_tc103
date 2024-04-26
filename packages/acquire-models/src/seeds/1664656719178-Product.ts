/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Product1664656719178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO \`quote_products\`
      (
        \`uuid\`,
        \`product_id\`,
        \`start_date\`,
        \`end_date\`,
        \`gender\`,
        \`name\`,
        \`display_name\`,
        \`image\`,
        \`description\`,
        \`display_order\`,
        \`json_data\`,
        \`carrier_id\`,
        \`created_time\`,
        \`modified_time\`,
        \`row_status\`
      )
    VALUES
      (
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Term Life 10"),
        1,
        NULL,
        NULL,
        NULL,
        "Term Life 10",
        NULL,
        "Term product, 10 years",
        "Term product, 10 years",
        1,
        "",
        1,
        CURRENT_TIMESTAMP,
        NULL,
        1
      ),
      (
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Term Life 30"),
        2,
        NULL,
        NULL,
        NULL,
        "Term Life 30",
        NULL,
        "Term product, 30 years",
        "Term product, 30 years",
        1,
        "",
        1,
        CURRENT_TIMESTAMP,
        NULL,
        1
      ),
      (
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Whole Life"),
        3,
        NULL,
        NULL,
        NULL,
        "Whole Life",
        NULL,
        "Whole Life product",
        "Whole Life product",
        1,
        "",
        1,
        CURRENT_TIMESTAMP,
        NULL,
        1
      )
    ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM quote_products WHERE uuid IN (
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Term Life 10"),
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Term Life 30"),
        uuid_v5("d074eedb-38ef-40b4-ac3c-5018e5aa8c0f","Whole Life")
      );`);
  }
}
