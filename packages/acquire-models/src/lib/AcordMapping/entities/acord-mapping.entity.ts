import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';
import { CreateAcordMappingDto } from '../dto/create-acord-mapping.dto';
import { UpdateAcordMappingDto } from '../dto/update-acord-mapping.dto';

@Entity({ name: 'acord_mapping' })
export class AcordMapping {
  constructor(params: CreateAcordMappingDto | UpdateAcordMappingDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  uuid!: string;

  @Column({ default: null })
  sureify_id?: string;

  @Column({ type: 'json' })
  acord?: object;

  @Column({ default: 1 })
  rowStatus!: 0 | 1;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time!: Date; // timestamp

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp
}
