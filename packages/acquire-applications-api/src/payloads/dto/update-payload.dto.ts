import { PartialType } from '@nestjs/swagger';
import { CreatePayloadDto } from './create-payload.dto';

export class UpdatePayloadDto extends PartialType(CreatePayloadDto) {}
