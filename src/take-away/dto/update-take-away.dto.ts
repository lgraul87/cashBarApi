import { PartialType } from '@nestjs/mapped-types';
import { CreateTakeAwayDto } from './create-take-away.dto';

export class UpdateTakeAwayDto extends PartialType(CreateTakeAwayDto) {}
