import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';

@Entity({ name: 'clients' })
export class Client {
  constructor(params: CreateClientDto | UpdateClientDto) {}

  @PrimaryGeneratedColumn() id!: number;
  @Column({ type: 'json', default: null }) carrier_config!: object;
  @Column() title!: string;
  @Column({ default: null }) carrier_display_name!: string;
  @Column({ default: null }) access_code!: string;
  @Column({ default: null }) phoneno?: string;
  @Column({ default: 1 }) row_status!: 0 | 1;
  @Column({ default: null }) carrier_unique_id!: string;
  @Column({ default: null }) carrier_access_token!: string;
  @Column({ default: null }) tango_remaining_balance!: number;
  @Column() user_session_id!: number;
  @Column({ default: () => 'CURRENT_TIMESTAMP' }) created_time!: Date; // datetime
  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time!: Date; // timestamp
  @Column({ default: null }) address_line1?: string;
  @Column({ default: null }) address_line2?: string;
  @Column({ default: null }) address_city?: string;
  @Column({ default: null }) address_state?: number;
  @Column({ default: null }) zip?: string;
  @Column({ default: null }) image?: string;
  @Column({ default: null }) organization_id!: string;
  @Column({ default: null }) organization_access_token!: string;
  @Column() registration_flag!: number;
  @Column({ default: null }) signup_type?: number;
}
