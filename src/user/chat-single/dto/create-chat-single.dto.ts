import { IsString } from 'class-validator';

export class CreateChatSingleDto {
  @IsString()
  text: string;
}
