import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatSingleModule } from './chat-single/chat-single.module';
import { ProfileModule } from './profile/profile.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [ChatSingleModule, ProfileModule],
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class UserModule {}
