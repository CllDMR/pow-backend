import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatMultipleController } from './chat-multiple.controller';
import { ChatMultipleService } from './chat-multiple.service';
import { MessageMultipleModule } from './message-multiple/message-multiple.module';

@Module({
  imports: [MessageMultipleModule],
  controllers: [ChatMultipleController],
  providers: [PrismaService, ChatMultipleService],
})
export class ChatMultipleModule {}
