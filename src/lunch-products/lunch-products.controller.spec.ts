import { Test, TestingModule } from '@nestjs/testing';
import { LunchProductsController } from './lunch-products.controller';
import { LunchProductsService } from './lunch-products.service';

describe('LunchProductsController', () => {
  let controller: LunchProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LunchProductsController],
      providers: [LunchProductsService],
    }).compile();

    controller = module.get<LunchProductsController>(LunchProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
