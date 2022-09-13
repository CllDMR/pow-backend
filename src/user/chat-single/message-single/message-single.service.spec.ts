import { Test, TestingModule } from '@nestjs/testing';
import { MessageSingleService } from './message-single.service';

describe('MessageSingleService', () => {
  let service: MessageSingleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageSingleService],
    }).compile();

    service = module.get<MessageSingleService>(MessageSingleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
