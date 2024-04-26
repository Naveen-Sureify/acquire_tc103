import { PartialType } from '@nestjs/swagger';
import { CreatePlanOptionDto } from './create-planoption.dto';

export class UpdatePlanOptionDto extends PartialType(CreatePlanOptionDto) {}
