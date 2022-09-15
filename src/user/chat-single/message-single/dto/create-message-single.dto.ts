import { IsBoolean, IsString } from 'class-validator';

export class CreateMessageSingleDto {
  @IsString()
  text: string;

  @IsBoolean()
  seen: boolean;

  @IsBoolean()
  sent: boolean;
}
