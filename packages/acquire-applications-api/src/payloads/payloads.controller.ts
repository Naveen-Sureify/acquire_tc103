import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PayloadsService } from './payloads.service';
import { CreatePayloadDto } from './dto/create-payload.dto';
import { UpdatePayloadDto } from './dto/update-payload.dto';

@Controller('payloads')
export class PayloadsController {
  constructor(private readonly payloadsService: PayloadsService) {}

  @Post()
  create(@Body() createPayloadDto: CreatePayloadDto) {
    return this.payloadsService.create(createPayloadDto);
  }

  @Get()
  findAll() {
    return this.payloadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payloadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayloadDto: UpdatePayloadDto) {
    return this.payloadsService.update(+id, updatePayloadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payloadsService.remove(+id);
  }
}
