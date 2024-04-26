import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

export type QuoteDto = {
  rowStatus: 0 | 1 | undefined;
};

@Entity({ name: 'quotes' })
export class Quote {
  constructor(params: QuoteDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 1 })
  row_status!: 0 | 1;

  @Column({ type: 'tinyint', nullable: true })
  quote_confirm?: number;

  @Column({ nullable: true })
  app_status?: string;

  @Column({ name: 'in_progress_app_status', nullable: true })
  in_progress_app_status?: string;

  @Column({ type: 'tinyint', nullable: true })
  processing?: number;

  @Column({ nullable: true })
  handled_by?: string;

  @Column({ name: 'app_started_by', nullable: true })
  app_started_by?: number;

  @Column({ name: 'request_type', nullable: true })
  request_type?: number;

  @Column({ name: 'transaction_id', nullable: true })
  transaction_id?: string;

  @Column()
  user_id?: number;

  @Column({ name: 'party_id', unique: true })
  party_d?: string;

  @Column({ nullable: true })
  app_number?: string;

  @Column({ nullable: true })
  firstname?: string;

  @Column({ nullable: true })
  lastname?: string;

  @Column('varbinary', { nullable: true })
  name?: string;

  @Column('varbinary', { nullable: true })
  email?: string;

  @Column({ nullable: true })
  gender?: number;

  @Column({ type: 'tinyint', nullable: true })
  smoke?: number;

  @Column()
  face_amount?: number;

  @Column()
  payment_type?: number;

  @Column({ nullable: true })
  premium_amount?: string;

  @Column({
    type: 'enum',
    enum: ['Monthly', 'Quarterly', 'Semi-Annual', 'Annual'],
    default: 'Monthly',
  })
  premium_frequency?: string;

  @Column({ type: 'float', nullable: true })
  underwrited_premium?: number;

  @Column({ type: 'date', nullable: true })
  birth_date?: Date;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  zip_code?: string;

  // @Column({ name: 'email_verification_code', nullable: true })
  // email_verification_code?: string;

  @Column({ default: 1 })
  product_id?: number;

  @Column({ nullable: true })
  product_master_id?: number;

  @Column({ nullable: true })
  plan_id?: number;

  // @Column('text', { nullable: true })
  // request_body?: string;

  // @Column({ nullable: true })
  // pdf_file?: string;

  @Column('longtext', { nullable: true })
  json_data?: string;

  @Column('longtext', { name: 'application_json_data', nullable: true })
  application_json_data?: string;

  @Column('longtext', { name: 'agent_json_data', nullable: true })
  agent_json_data?: string;

  @Column({ name: 'time_to_contact', nullable: true })
  time_to_contact?: number;

  @Column({ nullable: true })
  phone_number?: string;

  @Column({ name: 'text_message_accepted', default: 0 })
  text_message_accepted?: number;

  @Column({ name: 'underwriting_decision', nullable: true })
  underwriting_decision?: number;

  @Column({ name: 'decision_source', nullable: true })
  decision_source?: string;

  @Column({ default: 1 })
  carrier_id?: number;

  @Column({ type: 'timestamp' })
  created_time?: Date;

  @Column({ nullable: true })
  modified_time?: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at?: Date;

  @Column({ nullable: true })
  agent_id?: number;

  // @Column({ type: 'smallint', nullable: true })
  // transmission_status?: number;

  // @Column({ name: 'transmission_transaction_id', nullable: true })
  // transmission_transaction_id?: string;

  // @Column({ name: 'transmission_response', type: 'varbinary', nullable: true })
  // transmission_response?: string;

  // @Column({ default: 0 })
  // transmission_retry_count?: number;

  // @Column({ name: 'magnum_case_application_id', nullable: true })
  // magnum_case_application_id?: string;

  // @Column({ name: 'magnum_case_uuid', nullable: true })
  // magnum_case_uuid?: string;

  // @Column({ name: 'nw_message_id', nullable: true })
  // nw_message_id?: string;

  @Column({ name: 'mib_request_status', nullable: true })
  mib_request_status?: string;

  @Column({ name: 'campaign_code', nullable: true })
  campaign_code?: string;

  @Column({ name: 'lead_source', nullable: true })
  lead_source?: string;

  // @Column({ name: 'decision_email_sent_status', default: 0 })
  // decision_email_sent_status?: number;

  // @Column({ name: 'decision_email_sent_time', nullable: true })
  // decision_email_sent_time?: Date;

  // @Column({ name: 'keyvaluepair_status', type: 'tinyint', default: 0 })
  // keyvaluepair_status?: number;

  @Column({ name: 'application_section_id', nullable: true })
  application_section_id?: number;

  @Column({ nullable: true })
  external_uuid?: string;

  @Column({ name: 'health_records_required', type: 'tinyint', default: 0 })
  health_records_required?: number;

  @Column('longtext', { nullable: true })
  restore_info?: string;

  @Column('longtext', { name: 'restore_json_data', nullable: true })
  restore_json_data?: string;

  @Column('longtext', { name: 'restore_application_json_data', nullable: true })
  restore_application_json_data?: string;

  @Column({ nullable: true })
  clubcode?: string;

  @Column({ name: 'test_mode_questionnaire_id', nullable: true })
  test_mode_questionnaire_id?: number;

  @Column('longtext', { name: 'questionnaire_id_list', nullable: true })
  questionnaire_id_list?: string;

  @Column('json', { name: 'displayed_properties', nullable: true })
  displayed_properties?: any;

  @Column({ name: 'premium_amount_range', nullable: true, type: 'varchar' })
  premium_amount_range?: string;

  @Column({ name: 'lapse_user_id', nullable: true })
  lapse_user_id?: number;

  @Column({
    name: 'application_type',
    nullable: true,
    type: 'enum',
    enum: ['D2C', 'DROPTICKET', 'AGENT'],
  })
  application_type?: string;

  @Column('json', { name: 'restore_displayed_properties', nullable: true })
  restore_displayed_properties?: any;
}