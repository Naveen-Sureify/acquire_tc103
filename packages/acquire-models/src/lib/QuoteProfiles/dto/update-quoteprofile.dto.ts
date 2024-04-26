import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoteProfileDto } from './create-quoteprofile.dto';

export class UpdateQuoteProfileDto extends PartialType(CreateQuoteProfileDto) {}
