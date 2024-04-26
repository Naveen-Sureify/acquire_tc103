import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  ApplicationRas,
  PoliciesV2,
  Product,
  Quote,
} from '@sureifylabs/acquire-models';
import { Repository } from 'typeorm';

describe('ApplicationsService', () => {
  let service: DatabaseService;
  let applicationRas: Repository<ApplicationRas>;
  let quote: Repository<Quote>;
  let product: Repository<Product>;
  let policiesV2: Repository<PoliciesV2>;

  const mockFunctions = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DatabaseService,
        {
          provide: getRepositoryToken(ApplicationRas),
          useValue: mockFunctions,
        },
        {
          provide: getRepositoryToken(Quote),
          useValue: mockFunctions,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockFunctions,
        },
        {
          provide: getRepositoryToken(PoliciesV2),
          useValue: mockFunctions,
        },
      ],
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);
    applicationRas = module.get(getRepositoryToken(ApplicationRas));
    quote = module.get(getRepositoryToken(Quote));
    product = module.get(getRepositoryToken(Product));
    policiesV2 = module.get(getRepositoryToken(PoliciesV2));
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.skip('should return userId', async () => {
    const mockRasId = 1,
      mockRas: any = { user_id: 2 };
    jest.spyOn(applicationRas, 'findOne').mockReturnValue(mockRas);
    const userId = await service.applicationRasUserId(mockRasId);
    expect(mockFunctions.findOne).toBeCalled();
    expect(userId).toEqual(mockRas.user_id);
  });

  it.skip('should return Quote', async () => {
    const mockUserId = 2,
      mockQuoteData: any = {
        json_data: '{}',
        face_amount: 2000,
        id: 1,
        uuid: 'uuid',
        row_status: 1,
      };
    jest.spyOn(quote, 'findOne').mockReturnValue(mockQuoteData);
    const quoteData = await service.quoteFindOne(mockUserId);
    expect(mockFunctions.findOne).toBeCalled();
    expect(quoteData).toEqual(mockQuoteData);
  });

  it.skip('should return Product name', async () => {
    const mockProductId = 2,
      mockProductData: any = {
        name: 'Traditional Term Life',
      };
    jest.spyOn(product, 'findOne').mockReturnValue(mockProductData);
    const result = await service.productFindOne(mockProductId);
    expect(mockFunctions.findOne).toBeCalled();
    expect(result).toEqual(mockProductData.name);
  });

  it.skip('should return Policy number', async () => {
    const mockUserId = 2,
      mockPolicyData: any = {
        policy_number: 'U110006697',
      };
    jest.spyOn(policiesV2, 'findOne').mockReturnValue(mockPolicyData);
    const result = await service.policyNumber(mockUserId);
    expect(mockFunctions.findOne).toBeCalled();
    expect(result).toEqual(mockPolicyData.policy_number.toString());
  });
});
