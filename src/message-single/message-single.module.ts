import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MessageSingleController } from './message-single.controller';
import { MessageSingleService } from './message-single.service';

@Module({
  controllers: [MessageSingleController],
  providers: [PrismaService, MessageSingleService],
})
export class MessageSingleModule {}
