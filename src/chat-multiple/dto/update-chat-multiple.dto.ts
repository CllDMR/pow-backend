import { PartialType } from '@nestjs/mapped-types';
import { CreateChatMultipleDto } from './create-chat-multiple.dto';

export class UpdateChatMultipleDto extends PartialType(CreateChatMultipleDto) {}
