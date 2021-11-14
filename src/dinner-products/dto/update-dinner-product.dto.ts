import { PartialType } from '@nestjs/mapped-types';
import { CreateDinnerProductDto } from './create-dinner-product.dto';

export class UpdateDinnerProductDto extends PartialType(CreateDinnerProductDto) {}
