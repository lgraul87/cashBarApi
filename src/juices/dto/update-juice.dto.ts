import { PartialType } from '@nestjs/mapped-types';
import { CreateJuiceDto } from './create-juice.dto';

export class UpdateJuiceDto extends PartialType(CreateJuiceDto) {}
