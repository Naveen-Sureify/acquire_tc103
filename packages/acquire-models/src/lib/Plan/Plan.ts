import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import * as uuid from 'uuid';
import { Carrier } from '../Carrier';

export type PlanDto = {
  rowStatus: 0 | 1 | undefined;
};

@Entity({ name: 'quote_plans' })
export class Plan {
  constructor(params: PlanDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: uuid.v4() }) // char(36)
  uuid!: string;

  @Column({ default: 1 })
  rowStatus!: 0 | 1;

  @Column()
  product_id?: number;

  @Column()
  plan_id?: number;

  @Column() // Todo FK
  name?: string;

  @Column()
  api_plan_name?: string;

  @Column()
  display_name?: string;

  @Column()
  type?: string;

  @Column({ type: 'text' })
  short_description?: string;

  @Column({ type: 'text' })
  description?: string;

  @Column()
  display_order?: number;

  @Column()
  min_value?: number;

  @Column()
  max_value?: number;

  @Column()
  step_length?: number;

  @Column({ type: 'longtext' })
  json_data?: string;

  @ManyToOne((type) => Carrier, (carrier: Carrier) => carrier.products)
  carrier!: Carrier;

  @Column({ default: () => 'CUREENT_TIMESTAMP' })
  created_time?: Date;

  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date;
}
