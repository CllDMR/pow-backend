import { Test, TestingModule } from '@nestjs/testing';
import { MessageSingleController } from './message-single.controller';
import { MessageSingleService } from './message-single.service';

describe('MessageSingleController', () => {
  let controller: MessageSingleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageSingleController],
      providers: [MessageSingleService],
    }).compile();

    controller = module.get<MessageSingleController>(MessageSingleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
