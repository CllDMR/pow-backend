import { Test, TestingModule } from '@nestjs/testing';
import { ChatSingleService } from './chat-single.service';

describe('ChatSingleService', () => {
  let service: ChatSingleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatSingleService],
    }).compile();

    service = module.get<ChatSingleService>(ChatSingleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
