import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from '@sureifylabs/acquire-models';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteService {
  constructor(@InjectRepository(Quote) private quote: Repository<Quote>) {}

  async findOne(user_id: number): Promise<Quote> {
    return await this.quote.findOne({ where: { user_id } });
  }
}
