import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlanOption1698855882322 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`plan_option\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`uuid\` varchar(255) NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`modified_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                \`row_status\` int NOT NULL DEFAULT '1',
                \`product_name\` varchar(255) NULL,
                \`plan_options\` json NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`plan_option\`
        `);
  }
}
