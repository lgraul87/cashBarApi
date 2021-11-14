import { Module } from '@nestjs/common';
import { BreakfastProductsService } from './breakfast-products.service';
import { BreakfastProductsController } from './breakfast-products.controller';

@Module({
  controllers: [BreakfastProductsController],
  providers: [BreakfastProductsService]
})
export class BreakfastProductsModule {}
