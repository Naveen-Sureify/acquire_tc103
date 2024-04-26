import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateQuoteProfile1698856945093 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`quote_profile\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`settings\` json NOT NULL,
                \`coverage\` json NOT NULL,
                \`policy_holder\` int NOT NULL,
                \`underwriting_information\` json NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`quote_profile\`
        `);
  }
}
