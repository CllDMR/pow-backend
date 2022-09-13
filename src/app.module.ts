import { Module } from '@nestjs/common';
import { ChatMultipleModule } from './chat-multiple/chat-multiple.module';
import { ChatSingleModule } from './chat-single/chat-single.module';
import { MessageMultipleModule } from './message-multiple/message-multiple.module';
import { MessageSingleModule } from './message-single/message-single.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    ChatMultipleModule,
    MessageMultipleModule,
    ChatSingleModule,
    MessageSingleModule,
  ],
})
export class AppModule {}
