import { Test, TestingModule } from '@nestjs/testing';
import { SpiritDrinksController } from './spirit-drinks.controller';
import { SpiritDrinksService } from './spirit-drinks.service';

describe('SpiritDrinksController', () => {
  let controller: SpiritDrinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpiritDrinksController],
      providers: [SpiritDrinksService],
    }).compile();

    controller = module.get<SpiritDrinksController>(SpiritDrinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
