import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationsService } from './applications.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ApplicationRas, Carrier } from '@sureifylabs/acquire-models';

describe('ApplicationsService', () => {
  let service: ApplicationsService;

  const mockApplicationRasRepository = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApplicationsService,
        {
          provide: getRepositoryToken(ApplicationRas),
          useValue: mockApplicationRasRepository,
        },
      ],
    }).compile();

    service = module.get<ApplicationsService>(ApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return applicationRas by Id', async () => {
    const carrier: Carrier = {
      id: 0,
      products: [],
    };

    const applicationRasRow: ApplicationRas = {
      id: 1,
      user_id: 1,
      created_time: new Date(Date.now()),
      row_status: 0,
      carrier: carrier,
    };
    const findOne =
      mockApplicationRasRepository.findOne.mockReturnValue(applicationRasRow);
    const applicationRas = await service.findOne(1);
    expect(findOne).toBeCalled();
    expect(applicationRas).toEqual(applicationRasRow);
  });
});
