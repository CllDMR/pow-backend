import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatSingleController } from './chat-single.controller';
import { ChatSingleService } from './chat-single.service';
import { MessageSingleModule } from './message-single/message-single.module';

@Module({
  imports: [MessageSingleModule],
  controllers: [ChatSingleController],
  providers: [PrismaService, ChatSingleService],
})
export class ChatSingleModule {}
