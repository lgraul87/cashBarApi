import { Test, TestingModule } from '@nestjs/testing';
import { DinnerProductsController } from './dinner-products.controller';
import { DinnerProductsService } from './dinner-products.service';

describe('DinnerProductsController', () => {
  let controller: DinnerProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinnerProductsController],
      providers: [DinnerProductsService],
    }).compile();

    controller = module.get<DinnerProductsController>(DinnerProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
