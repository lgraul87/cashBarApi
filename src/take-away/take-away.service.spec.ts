import { Test, TestingModule } from '@nestjs/testing';
import { TakeAwayService } from './take-away.service';

describe('TakeAwayService', () => {
  let service: TakeAwayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakeAwayService],
    }).compile();

    service = module.get<TakeAwayService>(TakeAwayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
