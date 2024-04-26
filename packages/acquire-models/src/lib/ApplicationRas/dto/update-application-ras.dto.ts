import { PartialType } from '@nestjs/swagger';
import { CreateApplicationRasDto } from './create-application-ras.dto';

export class UpdateApplicationRasDto extends PartialType(
  CreateApplicationRasDto
) {}
