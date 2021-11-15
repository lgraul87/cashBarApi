import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from './entities/beer.entity';
import { Module } from '@nestjs/common';
import { BeersService } from './beers.service';
import { BeersController } from './beers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Beer])],
  controllers: [BeersController],
  providers: [BeersService],
})
export class BeersModule {}
