import { PartialType } from '@nestjs/mapped-types';
import { CreateSpiritDrinkDto } from './create-spirit-drink.dto';

export class UpdateSpiritDrinkDto extends PartialType(CreateSpiritDrinkDto) {}
