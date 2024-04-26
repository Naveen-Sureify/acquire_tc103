import { CreateCarrierDto } from '../dto/create-carrier.dto';
import { UpdateCarrierDto } from '../dto/update-carrier.dto';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../Product';

@Entity({ name: 'carriers' })
export class Carrier {
  constructor(params: CreateCarrierDto | UpdateCarrierDto) {}

  @PrimaryGeneratedColumn() id!: number;
  @Column({ type: 'json' }) carrier_config?: object; // json
  @Column() title?: string; // varchar(255)
  @Column({ default: null }) access_code?: string; // varchar(255)
  @Column({ default: null }) phoneno?: string; // varchar(255)
  @Column({ default: 1 }) row_status?: 0 | 1; // tinyint(1)
  @Column({ default: null }) carrier_unique_id?: string; // text
  @Column({ default: null }) carrier_access_token?: string; // text
  @Column({ default: null }) tango_remaining_balance?: number; // float(10,2)
  @Column() user_session_id?: number; // int(11)
  @Column({ default: () => 'CURRENT_TIMESTAMP' }) created_time?: Date; // datetime
  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp
  @Column({ default: null }) address_line1?: string; // text
  @Column({ default: null }) address_line2?: string; // text
  @Column({ default: null }) address_city?: string; // varchar(255)
  @Column({ default: null }) address_state?: number; // int(11)
  @Column({ default: null }) zip?: string; // varchar(255)
  @Column({ default: null }) image?: string; // text
  @Column({ default: null }) organization_id?: string; // varchar(255)
  @Column({ default: null }) organization_access_token?: string; // varchar(255)
  @Column() registration_flag?: number; // int(11)
  @Column({ default: null }) signup_type?: number; // int(11)
  @Column() client_id?: number; // int(11)
  @Column() distribution?: number; // int(11)
  @Column({ default: null }) carrier_display_name?: string; // varchar(255)

  @OneToMany((type) => Product, (product: Product) => product.carrier)
  products!: Product[];
}
