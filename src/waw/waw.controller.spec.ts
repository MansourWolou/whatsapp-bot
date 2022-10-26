import { Test, TestingModule } from '@nestjs/testing';
import { WawController } from './waw.controller';

describe('WawController', () => {
  let controller: WawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WawController],
    }).compile();

    controller = module.get<WawController>(WawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
