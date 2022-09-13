import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageMultipleDto } from './create-message-multiple.dto';

export class UpdateMessageMultipleDto extends PartialType(
  CreateMessageMultipleDto,
) {}
