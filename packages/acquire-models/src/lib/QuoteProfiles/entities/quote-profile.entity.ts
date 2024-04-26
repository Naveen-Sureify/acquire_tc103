import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateQuoteProfileDto } from '../dto/create-quoteprofile.dto';
import { UpdateQuoteProfileDto } from '../dto/update-quoteprofile.dto';
import { Blob } from 'buffer';
@Entity()
export class QuoteProfile {
  constructor(params: CreateQuoteProfileDto | UpdateQuoteProfileDto ) {}
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'json' })
  settings!: JSON;

  @Column({ type: 'json' })
  coverage!: JSON;

  @Column()
  policyHolder!: number;

  @Column({ type: 'json' })
  UnderwritingInformation!: JSON;
}
