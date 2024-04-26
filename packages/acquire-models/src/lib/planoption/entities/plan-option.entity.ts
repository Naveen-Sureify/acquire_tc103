import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreatePlanOptionDto } from '../dto/create-planoption.dto';
import { UpdatePlanOptionDto } from '../dto/update-planoption.dto';
import { Product } from '../../Product';
@Entity()
export class PlanOption {
  constructor(params: CreatePlanOptionDto | UpdatePlanOptionDto) {
    if (params) {
      if (params.uuid) this.uuid = params.uuid;
      if (params.planOptions) this.planOptions = params.planOptions;
    }
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: null })
  uuid!: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  modified_at?: Date;

  @Column({ default: 1 })
  row_status?: 0 | 1;

  @Column({ name: 'product_name', default: null })
  product!: string;

  /*

  {
    planOption,
    planOptionShortName,
    baseCoverage:{},
    riderInfo:{},
    benInfo:{},
    totalAnnualPremium,
    totalModalPremium 
  }

  */
  @Column({ type: 'json', default: null })
  planOptions!: JSON;
}
