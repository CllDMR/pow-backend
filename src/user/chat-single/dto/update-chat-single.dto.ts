import { PartialType } from '@nestjs/mapped-types';
import { CreateChatSingleDto } from './create-chat-single.dto';

export class UpdateChatSingleDto extends PartialType(CreateChatSingleDto) {}
