import { Test, TestingModule } from '@nestjs/testing';
import { WawService } from './waw.service';

describe('WawService', () => {
  let service: WawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WawService],
    }).compile();

    service = module.get<WawService>(WawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
