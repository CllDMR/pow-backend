import { IsString } from 'class-validator';

export class CreateMessageMultipleDto {
  @IsString()
  text: string;

  @IsString()
  seenBy: string;

  @IsString()
  sentTo: string;
}
