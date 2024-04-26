import { Injectable } from '@nestjs/common';
import { CreatePayloadDto } from './dto/create-payload.dto';
import { UpdatePayloadDto } from './dto/update-payload.dto';

@Injectable()
export class PayloadsService {
  create(createPayloadDto: CreatePayloadDto) {
    return 'This action adds a new payload';
  }

  findAll() {
    return `This action returns all payloads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payload`;
  }

  update(id: number, updatePayloadDto: UpdatePayloadDto) {
    return `This action updates a #${id} payload`;
  }

  remove(id: number) {
    return `This action removes a #${id} payload`;
  }
}
