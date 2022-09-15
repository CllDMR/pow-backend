import { Test, TestingModule } from '@nestjs/testing';
import { ChatMultipleService } from './chat-multiple.service';

describe('ChatMultipleService', () => {
  let service: ChatMultipleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatMultipleService],
    }).compile();

    service = module.get<ChatMultipleService>(ChatMultipleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
