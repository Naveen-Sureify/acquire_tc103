import {
  ApplicationRasInputJson,
  ApplicationTransmissionFormat,
} from '@sureifylabs/xml';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from '@sureifylabs/acquire-models';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quote: Repository<Quote>
  ) {}

  async findOne(user_id: number): Promise<Quote> {
    return await this.quote.findOne({ where: { user_id } });
  }

}
