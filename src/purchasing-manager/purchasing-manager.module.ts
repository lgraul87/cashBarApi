import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasingManager } from './entities/purchasing-manager.entity';
import { PurchasingManagerService } from './purchasing-manager.service';
import { PurchasingManagerController } from './purchasing-manager.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PurchasingManager])],
  controllers: [PurchasingManagerController],
  providers: [PurchasingManagerService],
})
export class PurchasingManagerModule {}
