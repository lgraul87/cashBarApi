import { PartialType } from '@nestjs/mapped-types';
import { CreateLunchProductDto } from './create-lunch-product.dto';

export class UpdateLunchProductDto extends PartialType(CreateLunchProductDto) {}
