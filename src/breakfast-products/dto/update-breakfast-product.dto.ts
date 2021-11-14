import { PartialType } from '@nestjs/mapped-types';
import { CreateBreakfastProductDto } from './create-breakfast-product.dto';

export class UpdateBreakfastProductDto extends PartialType(CreateBreakfastProductDto) {}
