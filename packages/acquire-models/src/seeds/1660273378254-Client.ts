/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

const DB_HOST = process.env['DB_HOST'] || 'localhost';
const DB_USER = process.env['DB_USER'] || 'root';
const DB_DB = process.env['DB_DB'] || 'acquire';
const DB_PWD = process.env['DB_PWD'] || 'password';
const REDIS_HOST = process.env['REDIS_HOST'] || 'localhost';
const REDIS_PORT = process.env['REDIS_PORT'] || '6379';
const REDIS_DB = process.env['REDIS_DB'] || '1';
const REDIS_PASSWORD = process.env['REDIS_PASSWORD'] || '';
const CLIENT = process.env['CLIENT'] || '1';
const ORGANIZATION_ID = process.env['ORGANIZATION_ID'] || 'yox5c2ezyt44web5rgoib8';
const ORGANIZATION_ACCESS_TOKEN =
  process.env['ORGANIZATION_ACCESS_TOKEN'] || 'NJKW85L76CT8DCBZXV9DHQSP8JRDBJW';

export class Client1660274147383 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO acquire.clients (
        id,
        carrier_config,
        title,
        carrier_display_name,
        access_code,
        phoneno,
        carrier_unique_id,
        carrier_access_token,
        tango_remaining_balance,
        user_session_id,
        created_time,
        modified_time,
        address_line1,
        address_line2,
        address_city,
        address_state,
        zip,
        image,
        organization_id,
        organization_access_token,
        registration_flag,
        signup_type,
        row_status
      ) VALUES (
          1,
          '{\"auth_type\":\"sureify\",\"apis\":[],\"constants\":{\"DATA_ENCRYPTION\":true},\"db_config\":{\"dsn\":\"\",\"encrypt\":false,\"cache_on\":false,\"cachedir\":\"\",\"char_set\":\"utf8\",\"compress\":false,\"database\":\"lifetime\",\"db_debug\":false,\"dbcollat\":\"utf8_general_ci\",\"dbdriver\":\"mysqli\",\"dbprefix\":\"\",\"failover\":[],\"addr\":\"${DB_HOST}\",\"alias\":\"client\",\"dbname\":\"${DB_DB}\",\"net\":\"tcp\",\"parameters\":{\"charset\":\"utf8\",\"collation\":\"utf8_general_ci\"},\"hostname\":\"db\",\"pconnect\":false,\"stricton\":false,\"swap_pre\":\"\",\"username\":\"root\",\"password\":\"root\",\"user\":\"${DB_USER}\",\"passwd\":\"${DB_PWD}\",\"save_queries\":true},\"redis_config\":{\"db\":\"${REDIS_DB}\",\"host\":\"${REDIS_HOST}\",\"passwd\":\"${REDIS_PASSWORD}\",\"port\":\"${REDIS_PORT}\"}}',
          'LifeCo',
          '${CLIENT}',
          1,
          NULL,
          '4niytuvong2gna75qb8qsq2xf9hwxunxm9dtsd3zqk',
          '9ydmksrxme7ouz9jk358vbptx3h34jbeoz7un3ibfb',
          0,
          1,
          CURRENT_TIMESTAMP,
          CURRENT_TIMESTAMP,
          NULL,
          NULL,
          NULL,
          0,
          NULL,
          NULL,
          '${ORGANIZATION_ID}',
          '${ORGANIZATION_ACCESS_TOKEN}',
          1,
          NULL,
          1
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM clients WHERE id = 1;`);
  }
}
