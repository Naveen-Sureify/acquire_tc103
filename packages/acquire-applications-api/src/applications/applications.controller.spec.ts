import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { compile } from '@sureifylabs/xml';
import { ApplicationFormat, ApplicationSchema } from '@sureifylabs/xml';
import {
  NotFoundException,
  UnsupportedMediaTypeException,
} from '@nestjs/common';

describe('ApplicationsController', () => {
  let controller: ApplicationsController;
  let service: ApplicationsService;
  const xml = { compile };

  const mockApplicationRasService = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationsController],
      providers: [ApplicationsService],
    })
      .overrideProvider(ApplicationsService)
      .useValue(mockApplicationRasService)
      .compile();

    controller = module.get<ApplicationsController>(ApplicationsController);
    service = module.get<ApplicationsService>(ApplicationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findOne method should throw an UnsupportedMediaTypeException', () => {
    expect(
      controller.findOne(1, ApplicationSchema.RAS, ApplicationFormat.XML)
    ).rejects.toThrowError(UnsupportedMediaTypeException);
  });

  it('findOne method should throw an NotFoundException', () => {
    const findOne =
      mockApplicationRasService.findOne.mockReturnValue(undefined);
    expect(
      controller.findOne(111, ApplicationSchema.TC103, ApplicationFormat.XML)
    ).rejects.toThrowError(NotFoundException);
    expect(findOne).toBeCalled();
  });

  //Skipping this test case as Parties and Relations are under development and final template is not fixed
  //To pass this test case valid application_ras and suitable template files are required
  it.skip('findOne method should return a template', async () => {
    const finalApplicationRas = JSON.stringify('application_ras');
    mockApplicationRasService.findOne.mockReturnValue({
      raw_input_json: finalApplicationRas,
    });
    const compile = jest.spyOn(xml, 'compile').mockResolvedValue('<></>');
    const template = await controller.findOne(
      1,
      ApplicationSchema.TC103,
      ApplicationFormat.XML
    );
    expect(mockApplicationRasService.findOne).toBeCalled();
    expect(compile).toBeCalled();
    expect(template).toEqual('<></>');
  });
});
