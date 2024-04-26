import { PartialType } from '@nestjs/swagger';
import { CreateProductApplicationDto } from './create-product-application.dto';

export class UpdateProductApplicationDto extends PartialType(
  CreateProductApplicationDto
) {}
