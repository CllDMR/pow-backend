import { IsMongoId, IsString } from 'class-validator';

export class CreateMessageMultipleDto {
  @IsMongoId()
  chatMultipleId: string;

  @IsString()
  text: string;

  @IsString()
  seenBy: string;

  @IsString()
  sentTo: string;
}
