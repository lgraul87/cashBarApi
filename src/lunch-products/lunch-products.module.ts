import { Module } from '@nestjs/common';
import { LunchProductsService } from './lunch-products.service';
import { LunchProductsController } from './lunch-products.controller';

@Module({
  controllers: [LunchProductsController],
  providers: [LunchProductsService]
})
export class LunchProductsModule {}
