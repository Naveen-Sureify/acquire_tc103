import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CreateApplicationRasDto } from '../dto/create-application-ras.dto';
import { UpdateApplicationRasDto } from '../dto/update-application-ras.dto';
import { Carrier } from '../../Carrier';
import { Blob } from 'buffer';
import * as uuid from 'uuid';

@Entity({ name: 'application_ras' })
export class ApplicationRas {
  constructor(params: CreateApplicationRasDto | UpdateApplicationRasDto) {}

  //   +----------------------------+--------------+------+-----+-------------------+-----------------------------+
  // | Field                      | Type         | Null | Key | Default           | Extra                       |
  // +----------------------------+--------------+------+-----+-------------------+-----------------------------+
  // | id                         | int(11)      | NO   | PRI | NULL              | auto_increment              |
  @PrimaryGeneratedColumn()
  id!: number;
  // | user_id                    | int(11)      | NO   | MUL | NULL              |                             |
  @Column()
  user_id!: number;
  // | quote_id                   | int(11)      | YES  |     | NULL              |                             |
  @Column({ nullable: true })
  quote_id?: number;
  @Column({ nullable:true,default: uuid.v4() }) // char(36)
  user_role_uuid?: string;
  // | input_json                 | longblob     | YES  |     | NULL              |                             |
  @Column({ type: 'longblob' })
  input_json?: Blob;
  // | raw_input_json             | longtext     | YES  |     | NULL              |                             |
  @Column({ nullable: true, type: 'longtext' })
  raw_input_json?: string;
  // | application_status         | int(11)      | YES  |     | 70001             |                             |
  @Column({ nullable: true, default: 70001 })
  application_status?: number;
  // | valid_status               | int(11)      | YES  |     | 0                 |                             |
  @Column({ default: 0 })
  valid_status?: number;
  // | handled_by                 | int(11)      | YES  |     | 2004              |                             |
  @Column({ nullable: true, default: 2004 })
  handled_by?: number;
  // | created_time               | timestamp    | NO   |     | CURRENT_TIMESTAMP |                             |
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date; // timestamp
  // | modified_time              | datetime     | YES  |     | NULL              |                             |
  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // datetime
  // | updated_at                 | timestamp    | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
  @Column({
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updated_at?: Date; // timestamp
  // | row_status                 | int(11)      | NO   |     | 1                 |                             |
  @Column({ default: 1 })
  row_status!: number;
  // | carrier_id                 | int(11)      | YES  |     | 1                 |                             |
  // @Column({ nullable: true, default: 1 })
  @ManyToOne((type) => Carrier, (carrier: Carrier) => carrier.products)
  carrier!: Carrier;
  // | restore_raw_input_json     | longtext     | YES  |     | NULL              |                             |
  @Column({ nullable: true, type: 'longtext' })
  restore_raw_input_json?: string;
  // | restore_input_json         | longblob     | YES  |     | NULL              |                             |
  @Column({ nullable: true, type: 'longblob' })
  restore_input_json?: Blob;
  @Column({ nullable: true, type: 'json' })
  app_data_modal_json?: Record<string, any>;
}