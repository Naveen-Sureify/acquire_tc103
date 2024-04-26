import {
  ProductCore,
  ProductCoreConstructorParams,
} from '@sureifylabs/acquire-core';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import * as uuid from 'uuid';
import { Carrier } from '../../Carrier';

import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Entity({ name: 'quote_products' })
export class Product extends ProductCore {
  constructor(params: CreateProductDto | UpdateProductDto) {
    super(params as ProductCoreConstructorParams);
  }

  @PrimaryGeneratedColumn()
  override id!: number;

  @Column({ default: null })
  override name!: string;

  @Column({ default: uuid.v4() })
  uuid!: string;

  @Column({ default: null, name: 'display_name' })
  displayName?: string;

  @Column({ default: null, name: 'product_id' })
  productId!: number;

  @Column({ type: 'date', default: null, name: 'start_date' })
  startDate?: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_time',
  })
  createdTime?: Date;

  @Column({
    type: 'datetime',
    default: null,
    name: 'modified_time',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  modifiedTime?: Date;

  @Column({ type: 'date', default: null, name: 'end_date' })
  endDate?: string;

  @Column({ default: null })
  image?: string;

  @Column({ default: null, type: 'text' })
  description?: string;

  @Column({ default: null }) // TODO - deprecate
  gender?: string;

  @Column({ default: null, name: 'display_order' })
  displayOrder?: number;

  @Column({ default: null, name: 'json_data', type: 'longtext' })
  jsonData?: string;

  @ManyToOne((_type) => Carrier, (carrier) => carrier.products)
  carrier!: Carrier;

  @Column({ default: 1, name: 'row_status' }) // Todo FK in my db
  override rowStatus!: 0 | 1;

  @Column({ default: 0, name: 'is_active' })
  isActive?: 0 | 1;

  @Column({ default: 2001 })
  distribution?: number;

  @Column({ name: 'user_id', default: null })
  userId?: number;

  @Column({ type: 'varchar', length: '255', name: 'user_name', default: null })
  userName?: string;

  @Column({ name: 'is_quote', default: 0 })
  isQuote?: number;

  @Column({
    name: 'inactive_image',
    type: 'varchar',
    length: '255',
    default: 0,
  })
  inactiveImage?: string;

  // ...
}
