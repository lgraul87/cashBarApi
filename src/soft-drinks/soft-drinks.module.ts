import { Module } from '@nestjs/common';
import { SoftDrinksService } from './soft-drinks.service';
import { SoftDrinksController } from './soft-drinks.controller';

@Module({
  controllers: [SoftDrinksController],
  providers: [SoftDrinksService]
})
export class SoftDrinksModule {}
