import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'policies_v2' })
export class PoliciesV2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  user_id?: number;

  @Column({ type: 'varbinary', length: 255, nullable: true })
  policy_holder_id?: Buffer;

  @Column({ type: 'varchar', length: 50, nullable: true })
  insurer_policyholder_id?: string;

  @Column({ type: 'varbinary', length: 255 })
  policy_number?: Buffer;

  @Column({ type: 'varchar', length: 50, nullable: true })
  insurer_policy_number?: string;

  @Column({ type: 'int', nullable: true })
  line_of_business?: number;

  @Column({ type: 'int', nullable: true })
  policy_type?: number;

  @Column({ type: 'int', nullable: true })
  client_policy_status?: number;

  @Column({ type: 'int', default: 1, nullable: true })
  tracker_status?: number;

  @Column({ type: 'json', nullable: true })
  policy_json?: any;

  @Column({ type: 'int', nullable: true })
  carrier_id?: number;

  @Column({ type: 'int', default: 1, nullable: true })
  user_session_id?: number;

  @Column({ type: 'tinyint', default: 1 })
  row_status?: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at?: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: Date;

  @Column({ type: 'int', default: 1 })
  qualifying?: number;

  @Column({ type: 'tinyint', default: 0 })
  auto_pay_status?: number;
}
