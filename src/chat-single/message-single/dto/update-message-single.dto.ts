import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageSingleDto } from './create-message-single.dto';

export class UpdateMessageSingleDto extends PartialType(
  CreateMessageSingleDto,
) {}
