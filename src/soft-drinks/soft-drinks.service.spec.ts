import { Test, TestingModule } from '@nestjs/testing';
import { SoftDrinksService } from './soft-drinks.service';

describe('SoftDrinksService', () => {
  let service: SoftDrinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftDrinksService],
    }).compile();

    service = module.get<SoftDrinksService>(SoftDrinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
