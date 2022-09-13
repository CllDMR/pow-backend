import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MessageMultipleController } from './message-multiple.controller';
import { MessageMultipleService } from './message-multiple.service';

@Module({
  controllers: [MessageMultipleController],
  providers: [PrismaService, MessageMultipleService],
})
export class MessageMultipleModule {}
