import { IsString } from 'class-validator';

export class CreateChatMultipleDto {
  @IsString()
  adminUsers: string;

  @IsString()
  name: string;
}
