import { Test, TestingModule } from '@nestjs/testing';
import { PurchasingManagerController } from './purchasing-manager.controller';
import { PurchasingManagerService } from './purchasing-manager.service';

describe('PurchasingManagerController', () => {
  let controller: PurchasingManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasingManagerController],
      providers: [PurchasingManagerService],
    }).compile();

    controller = module.get<PurchasingManagerController>(PurchasingManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
