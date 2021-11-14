import { Test, TestingModule } from '@nestjs/testing';
import { SpiritDrinksService } from './spirit-drinks.service';

describe('SpiritDrinksService', () => {
  let service: SpiritDrinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpiritDrinksService],
    }).compile();

    service = module.get<SpiritDrinksService>(SpiritDrinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
