import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserSessionDto } from '../dto/create-user-session.dto';

@Entity({ name: 'user_sessions' })
export class UserSession {
  constructor(_params?: CreateUserSessionDto) {}

  @PrimaryGeneratedColumn() id!: number;
  @Column() user_id?: number; // int(11) // Todo FK
  @Column({ nullable: true }) login_time?: string; // datetime
  @Column({ nullable: true }) logout_time?: string; // datetime
  @Column({ type: 'varchar', length: '300', nullable: true }) login_ip?: string; // varchar(255)
  @Column({ type: 'varchar', length: '300', nullable: true }) browser?: string; // varchar(255)
  @Column({ type: 'varchar', length: '255', nullable: true }) OS?: string; // varchar(255)
  @Column() platform?: 'A' | 'I' | 'W'; // enum('A','I','W')
  @Column({ type: 'varchar', length: '300', nullable: true })
  device_id?: string; // varchar(255)
  @Column({ nullable: true }) device_token?: string; // text
  @Column({ nullable: true }) last_activity_time?: string; // datetime
  @Column({ nullable: true }) expiry_duration?: number; // int(11)
  @Column() row_status?: number; // tinyint(1)
  @Column({ default: () => 'CURRENT_TIMESTAMP' }) created_time?: Date; // datetime
  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp
  @Column({ type: 'varchar', length: '1000', default: null })
  access_token?: string; // varchar(1000)
  @Column({ default: 1 }) carrier_id?: number; // int(11)
  @Column({ type: 'text', nullable: true }) headers_json_data?: string; // text
  @Column({ type: 'json', nullable: true }) location?: JSON; // json
}
