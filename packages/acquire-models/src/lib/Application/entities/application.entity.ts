import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToMany,
  // JoinColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import * as uuid from 'uuid';
import { Carrier } from '../../Carrier';

import { CreateApplicationDto } from '../dto/create-application.dto';
import { UpdateApplicationDto } from '../dto/update-application.dto';

@Entity({ name: 'questionnaire' })
export class Application {
  constructor(params: CreateApplicationDto | UpdateApplicationDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  @Index('questionnaire_uuid_unique_index', { unique: true })
  uuid!: string;

  @Column({ default: 1 })
  version!: number;

  @Column({ default: 1 })
  @Index()
  rowStatus!: 0 | 1;

  @Column({ default: 1 })
  product_questionnaire_id!: number;

  @Column({ default: '' })
  questionnaire_id_string!: string;

  @ManyToOne((type) => Carrier, (carrier: Carrier) => carrier.products)
  @Index()
  carrier!: Carrier;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date; // timestamp

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp

  @Column({ default: 1 })
  effective_from?: string; // timestamp

  @Column({ default: 1 })
  quote_product_id?: number; // fk

  // TODO quote_product_id

  @Column({ default: 1 })
  nonce?: number;

  @Column({ default: null })
  user_id?: number;

  @Column({ type: 'varchar', length: '255', default: null })
  user_name?: string;

  @Column({ type: 'json', default: null })
  default_roles?: object;

  @Column({ default: 1 })
  is_prefill_enabled!: number;

  @Column({ default: 0 })
  pdf_mapping_version!: number;
}
