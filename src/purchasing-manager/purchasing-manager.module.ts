import { Module } from '@nestjs/common';
import { PurchasingManagerService } from './purchasing-manager.service';
import { PurchasingManagerController } from './purchasing-manager.controller';

@Module({
  controllers: [PurchasingManagerController],
  providers: [PurchasingManagerService]
})
export class PurchasingManagerModule {}
