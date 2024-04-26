import {
  ApplicationRasInputJson,
  ApplicationTransmissionFormat,
} from '@sureifylabs/xml';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationRas } from '@sureifylabs/acquire-models';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(ApplicationRas)
    private applicationRas: Repository<ApplicationRas>
  ) {}

  async findOne(id: number): Promise<ApplicationRas> {
    return await this.applicationRas.findOne({ where: { id } });
  }

  async validate(id: number): Promise<boolean> {
    id;
    return false;
  }

  async transmit(
    id: number,
    format: ApplicationTransmissionFormat
  ): Promise<boolean> {
    return false;
  }
}
