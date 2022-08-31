import { Test, TestingModule } from '@nestjs/testing';
import { WawController } from './waw.controller';
import { WawService } from './waw.service';

describe('WawController', () => {
  let controller: WawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WawController],
      providers: [WawService],
    }).compile();

    controller = module.get<WawController>(WawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
