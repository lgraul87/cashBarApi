import { Test, TestingModule } from '@nestjs/testing';
import { DinnerProductsService } from './dinner-products.service';

describe('DinnerProductsService', () => {
  let service: DinnerProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinnerProductsService],
    }).compile();

    service = module.get<DinnerProductsService>(DinnerProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
