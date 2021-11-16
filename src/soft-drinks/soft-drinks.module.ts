import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftDrink } from './entities/soft-drink.entity';
import { SoftDrinksService } from './soft-drinks.service';
import { SoftDrinksController } from './soft-drinks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SoftDrink])],
  controllers: [SoftDrinksController],
  providers: [SoftDrinksService],
})
export class SoftDrinksModule {}
