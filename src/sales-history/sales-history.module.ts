import { Module } from '@nestjs/common';
import { SalesHistoryService } from './sales-history.service';
import { SalesHistoryController } from './sales-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesHistory } from './entities/sales-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesHistory])],
  controllers: [SalesHistoryController],
  providers: [SalesHistoryService],
})
export class SalesHistoryModule {}
