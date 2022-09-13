import { Test, TestingModule } from '@nestjs/testing';
import { ChatMultipleController } from './chat-multiple.controller';
import { ChatMultipleService } from './chat-multiple.service';

describe('ChatMultipleController', () => {
  let controller: ChatMultipleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatMultipleController],
      providers: [ChatMultipleService],
    }).compile();

    controller = module.get<ChatMultipleController>(ChatMultipleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
