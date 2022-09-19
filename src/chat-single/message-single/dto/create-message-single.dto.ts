import { IsBoolean, IsMongoId, IsString } from 'class-validator';

export class CreateMessageSingleDto {
  @IsMongoId()
  chatSingleId: string;

  @IsString()
  text: string;

  @IsBoolean()
  seen: boolean;

  @IsBoolean()
  sent: boolean;
}
