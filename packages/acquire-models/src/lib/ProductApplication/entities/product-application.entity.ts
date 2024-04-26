import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

import { CreateProductApplicationDto } from '../dto/create-product-application.dto';
import { UpdateProductApplicationDto } from '../dto/update-product-application.dto';

@Entity({ name: 'product_questionnaire' })
export class ProductApplication {
  constructor(
    params: CreateProductApplicationDto | UpdateProductApplicationDto
  ) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  uuid!: string;

  @Column({ default: 1 })
  version!: number;

  @Column({ default: 1 })
  product_id?: number; // fk

  // TODO quote_product_id

  @Column({ nullable: true })
  active_version_id?: number;

  @Column({ default: 0 })
  is_active?: number;

  @Column({ default: 1 })
  region_id?: number;

  @Column({ default: '', type: 'varchar', length: '255' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'json', nullable: true })
  default_roles?: object;

  @Column({ default: 1, name: 'row_status' }) // Todo FK
  rowStatus!: 0 | 1;

  @Column({ default: 1, nullable: false })
  carrier_id!: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date; // timestamp

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp
}
