import { Test, TestingModule } from '@nestjs/testing';
import { JuicesController } from './juices.controller';
import { JuicesService } from './juices.service';

describe('JuicesController', () => {
  let controller: JuicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuicesController],
      providers: [JuicesService],
    }).compile();

    controller = module.get<JuicesController>(JuicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
