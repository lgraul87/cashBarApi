import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LunchProductsService } from './lunch-products.service';
import { LunchProductsController } from './lunch-products.controller';
import { LunchProduct } from './entities/lunch-product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([LunchProduct])],
  controllers: [LunchProductsController],
  providers: [LunchProductsService],
})
export class LunchProductsModule {}
