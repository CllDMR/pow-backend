import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatSingleController } from './chat-single.controller';
import { ChatSingleService } from './chat-single.service';

@Module({
  imports: [],
  controllers: [ChatSingleController],
  providers: [PrismaService, ChatSingleService],
})
export class ChatSingleModule {}
