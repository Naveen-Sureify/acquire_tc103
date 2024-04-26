/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class User1664428539109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO users (
          name,
          email,
          password,
          user_type,
          status,
          login_attempts,
          last_login,
          active_status,
          row_status,
          user_unique_id,
          access_token_error,
          user_session_id,
          created_time,
          modified_time,
          carrier_id
        ) VALUES (
          'admin',
          'admin@sureify.com',
          '${await bcrypt.hash('$ure!fY@345#', 1)}',
          1,
          1,
          NULL,
          NULL,
          1,
          1,
          1,
          NULL,
          1,
          NULL,
          NULL,
          1
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM \`acquire\`.\`users\` WHERE id = 1;
      `);
  }
}
