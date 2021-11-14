import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftDrinkDto } from './create-soft-drink.dto';

export class UpdateSoftDrinkDto extends PartialType(CreateSoftDrinkDto) {}
