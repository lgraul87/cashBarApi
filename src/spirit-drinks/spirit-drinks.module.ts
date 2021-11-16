import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpiritDrink } from './entities/spirit-drink.entity';
import { SpiritDrinksService } from './spirit-drinks.service';
import { SpiritDrinksController } from './spirit-drinks.controller';
@Module({
  imports: [TypeOrmModule.forFeature([SpiritDrink])],
  controllers: [SpiritDrinksController],
  providers: [SpiritDrinksService],
})
export class SpiritDrinksModule {}
