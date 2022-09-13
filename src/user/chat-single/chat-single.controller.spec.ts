import { Test, TestingModule } from '@nestjs/testing';
import { ChatSingleController } from './chat-single.controller';
import { ChatSingleService } from './chat-single.service';

describe('ChatSingleController', () => {
  let controller: ChatSingleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatSingleController],
      providers: [ChatSingleService],
    }).compile();

    controller = module.get<ChatSingleController>(ChatSingleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
