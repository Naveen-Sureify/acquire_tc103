import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToMany,
  // JoinColumn,
  Index,
} from 'typeorm';
import * as uuid from 'uuid';

import { CreateApplicationSectionDto } from '../dto/create-application-section.dto';
import { UpdateApplicationSectionDto } from '../dto/update-application-section.dto';

@Entity({ name: 'application_sections' })
@Index(['product_ApplicationSection_id', 'rowStatus'])
export class ApplicationSection {
  constructor(
    params: CreateApplicationSectionDto | UpdateApplicationSectionDto
  ) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  uuid!: string;

  @Column({ name: 'questionnaire_id', default: null })
  product_ApplicationSection_id!: number; //questionnaire_id //mul key

  // TODO product_ApplicationSection

  @Column({
    name: 'questionnaire',
    type: 'varchar',
    length: 255,
    default: null,
  })
  ApplicationSection_id_string!: string; // is it questionnaire column

  @Column({ default: 1 })
  rowStatus!: 0 | 1;

  @Column({ default: 1 })
  carrier_id!: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date; // timestamp

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp

  @Column({ default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' })
  updated_time!: Date;

  @Column({ default: null })
  product_id?: number; // fk //product_id

  // TODO quote_product_id

  @Column({ type: 'varchar', length: '255', default: null })
  name!: string;

  @Column({ default: null })
  sequence_order!: number;

  @Column({ default: 1 })
  user_session_id?: number;

  @Column({ default: 'questions' })
  type?: string;

  @Column({ type: 'json', default: null })
  config?: object;

  @Column({ default: 2004 })
  distribution?: number;

  @Column({ default: 0 })
  conditional?: number;

  @Column({ default: 0 })
  is_followup?: number;
}
