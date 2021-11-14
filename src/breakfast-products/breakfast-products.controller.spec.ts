import { Test, TestingModule } from '@nestjs/testing';
import { BreakfastProductsController } from './breakfast-products.controller';
import { BreakfastProductsService } from './breakfast-products.service';

describe('BreakfastProductsController', () => {
  let controller: BreakfastProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreakfastProductsController],
      providers: [BreakfastProductsService],
    }).compile();

    controller = module.get<BreakfastProductsController>(BreakfastProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
