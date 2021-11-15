import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DinnerProduct } from './entities/dinner-product.entity';
import { DinnerProductsService } from './dinner-products.service';
import { DinnerProductsController } from './dinner-products.controller';
@Module({
  imports: [TypeOrmModule.forFeature([DinnerProduct])],
  controllers: [DinnerProductsController],
  providers: [DinnerProductsService],
})
export class DinnerProductsModule {}
