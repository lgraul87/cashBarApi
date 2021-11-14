import { Module } from '@nestjs/common';
import { SpiritDrinksService } from './spirit-drinks.service';
import { SpiritDrinksController } from './spirit-drinks.controller';

@Module({
  controllers: [SpiritDrinksController],
  providers: [SpiritDrinksService]
})
export class SpiritDrinksModule {}
