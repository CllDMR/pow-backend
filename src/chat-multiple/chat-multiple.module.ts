import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatMultipleController } from './chat-multiple.controller';
import { ChatMultipleService } from './chat-multiple.service';

@Module({
  imports: [],
  controllers: [ChatMultipleController],
  providers: [PrismaService, ChatMultipleService],
})
export class ChatMultipleModule {}
