import { Module } from '@nestjs/common';
import { SalesHistoryService } from './sales-history.service';
import { SalesHistoryController } from './sales-history.controller';

@Module({
  controllers: [SalesHistoryController],
  providers: [SalesHistoryService]
})
export class SalesHistoryModule {}
