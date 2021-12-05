import { Module } from '@nestjs/common';
import { TakeAwayService } from './take-away.service';
import { TakeAwayController } from './take-away.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TakeAway } from './entities/take-away.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TakeAway])],
  controllers: [TakeAwayController],
  providers: [TakeAwayService],
})
export class TakeAwayModule {}
