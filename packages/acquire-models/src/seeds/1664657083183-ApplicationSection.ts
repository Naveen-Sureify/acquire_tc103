/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class ApplicationSection1664657083183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO \`application_sections\` (
      \`uuid\`,
      \`name\`,
      \`product_id\`,
      \`questionnaire\`,
      \`questionnaire_id\`,
      \`sequence_order\`,
      \`carrier_id\`,
      \`user_session_id\`,
      \`row_status\`,
      \`created_time\`,
      \`updated_time\`,
      \`type\`,
      \`config\`
    ) VALUES
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Initial Assessment"), 'Initial Assessment', '1', 'sureify', 1, '1', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700006', NULL),
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Review"), 'Review', '1', 'sureify', 1, '2', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700007', NULL),
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Payment"), 'Payment', '1', 'sureify', 1, '3', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700009', NULL),
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Signature"), 'Signature', '1', 'sureify', 1, '5', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700008', NULL),
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Agent Statement"), 'Agent Statement', '1', 'sureify', 1, '6', '1', '1', '1', '2020-07-22 07:50:59', '2020-08-13 05:52:36', '700006', NULL),
      (uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","1035 Exchange"), '1035 Exchange', '1', 'sureify', 2, '4', '1', '1', '1', '2020-07-23 06:39:47', '2020-08-13 05:52:36', '700006', NULL),
      (uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Initial Assessment"), 'Initial Assessment', '1', 'sureify', 2, '1', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700006', NULL),
      (uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Review"), 'Review', '1', 'sureify', 3, '2', '2', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700007', NULL),
      (uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Payment"), 'Payment', '1', 'sureify', 3, '3', '1', '1', '1', '2020-07-21 10:12:12', '2020-08-13 05:52:36', '700009', NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM application_sections WHERE uuid IN (
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031", "Initial Assessment"),
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Review"),
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Payment"),
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Signature"),
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","Agent Statement"),
        uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Initial Assessment"),
        uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Review"),
        uuid_v5("fb362678-ceb0-4656-af36-960d8230c8cc","Payment"),
        uuid_v5("df2a815f-e960-4d3d-9722-0ac479b24031","1035 Exchange")
      );`);
  }
}
