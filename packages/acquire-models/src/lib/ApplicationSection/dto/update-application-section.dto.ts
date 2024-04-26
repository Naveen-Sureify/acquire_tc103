import { PartialType } from '@nestjs/swagger';
import { CreateApplicationSectionDto } from './create-application-section.dto';

export class UpdateApplicationSectionDto extends PartialType(
  CreateApplicationSectionDto
) {}
