import { Test, TestingModule } from '@nestjs/testing';
import { MessageMultipleController } from './message-multiple.controller';
import { MessageMultipleService } from './message-multiple.service';

describe('MessageMultipleController', () => {
  let controller: MessageMultipleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageMultipleController],
      providers: [MessageMultipleService],
    }).compile();

    controller = module.get<MessageMultipleController>(
      MessageMultipleController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
