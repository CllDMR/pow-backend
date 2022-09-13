import { IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  bio: string;

  @IsNumber()
  age: number;
}
