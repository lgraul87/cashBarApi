import { Test, TestingModule } from '@nestjs/testing';
import { BreakfastProductsService } from './breakfast-products.service';

describe('BreakfastProductsService', () => {
  let service: BreakfastProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreakfastProductsService],
    }).compile();

    service = module.get<BreakfastProductsService>(BreakfastProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
