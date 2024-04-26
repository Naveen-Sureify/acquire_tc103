import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateRegionDto } from '../dto/create-region.dto';
import * as uuid from 'uuid';
import { UpdateRegionDto } from '../../Region';

@Entity({ name: 'region' })
export class Region {
  constructor(params: CreateRegionDto | UpdateRegionDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  uuid!: string;

  @Column({ type: 'varchar', length: '255' }) // Todo FK
  slug!: string;

  @Column()
  continent!: string;

  @Column()
  country!: string;

  @Column()
  name?: string;

  @Column({ default: 1 }) // Todo FK
  row_status?: 0 | 1;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_time?: Date;

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date;
}
