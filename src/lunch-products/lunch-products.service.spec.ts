import { Test, TestingModule } from '@nestjs/testing';
import { LunchProductsService } from './lunch-products.service';

describe('LunchProductsService', () => {
  let service: LunchProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LunchProductsService],
    }).compile();

    service = module.get<LunchProductsService>(LunchProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
