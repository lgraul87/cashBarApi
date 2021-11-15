import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreakfastProductsService } from './breakfast-products.service';
import { BreakfastProductsController } from './breakfast-products.controller';
import { BreakfastProduct } from './entities/breakfast-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BreakfastProduct])],
  controllers: [BreakfastProductsController],
  providers: [BreakfastProductsService],
})
export class BreakfastProductsModule {}
