import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ApplicationRas,
  PoliciesV2,
  Product,
  Quote,
} from '@sureifylabs/acquire-models';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(ApplicationRas)
    private applicationRas: Repository<ApplicationRas>,
    @InjectRepository(Quote) private quote: Repository<Quote>,
    @InjectRepository(Product) private product: Repository<Product>,
    @InjectRepository(PoliciesV2) private policiesV2: Repository<PoliciesV2>
  ) {}

  async applicationRasUserId(id: number): Promise<number> {
    const userId = await this.applicationRas?.findOne({ where: { id } });
    return userId?.user_id as number;
  }

  async quoteFindOne(userId: number): Promise<Quote | null> {
    return await this.quote?.findOne({ where: { user_id: userId } });
  }

  async productFindOne(productId: number): Promise<string> {
    const product = await this.product?.findOne({
      where: { productId },
    });
    return product?.name as string;
  }

  async policyNumber(userId: number): Promise<string> {
    const policy = await this.policiesV2?.findOne({
      where: { user_id: userId },
    });
    return policy?.policy_number?.toString() as string;
  }
}
