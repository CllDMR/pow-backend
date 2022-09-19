import { Test, TestingModule } from '@nestjs/testing';
import { MessageMultipleService } from './message-multiple.service';

describe('MessageMultipleService', () => {
  let service: MessageMultipleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageMultipleService],
    }).compile();

    service = module.get<MessageMultipleService>(MessageMultipleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
