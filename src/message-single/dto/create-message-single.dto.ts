import { IsString } from 'class-validator';

export class CreateMessageSingleDto {
  @IsString()
  text: string;
}
