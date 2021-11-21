import { Module } from '@nestjs/common';
import { WinesService } from './wines.service';
import { WinesController } from './wines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wine } from './entities/wine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wine])],
  controllers: [WinesController],
  providers: [WinesService],
})
export class WinesModule {}
