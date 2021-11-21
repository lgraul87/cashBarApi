import { Test, TestingModule } from '@nestjs/testing';
import { TakeAwayController } from './take-away.controller';
import { TakeAwayService } from './take-away.service';

describe('TakeAwayController', () => {
  let controller: TakeAwayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakeAwayController],
      providers: [TakeAwayService],
    }).compile();

    controller = module.get<TakeAwayController>(TakeAwayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
