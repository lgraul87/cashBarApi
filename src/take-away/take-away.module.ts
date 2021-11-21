import { Module } from '@nestjs/common';
import { TakeAwayService } from './take-away.service';
import { TakeAwayController } from './take-away.controller';

@Module({
  controllers: [TakeAwayController],
  providers: [TakeAwayService]
})
export class TakeAwayModule {}
