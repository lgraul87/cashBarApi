import { Module } from '@nestjs/common';
import { DinnerProductsService } from './dinner-products.service';
import { DinnerProductsController } from './dinner-products.controller';

@Module({
  controllers: [DinnerProductsController],
  providers: [DinnerProductsService]
})
export class DinnerProductsModule {}
