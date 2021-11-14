import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchasingManagerDto } from './create-purchasing-manager.dto';

export class UpdatePurchasingManagerDto extends PartialType(CreatePurchasingManagerDto) {}
