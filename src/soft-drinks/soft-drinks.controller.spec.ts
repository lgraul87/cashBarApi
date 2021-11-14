import { Test, TestingModule } from '@nestjs/testing';
import { SoftDrinksController } from './soft-drinks.controller';
import { SoftDrinksService } from './soft-drinks.service';

describe('SoftDrinksController', () => {
  let controller: SoftDrinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftDrinksController],
      providers: [SoftDrinksService],
    }).compile();

    controller = module.get<SoftDrinksController>(SoftDrinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
