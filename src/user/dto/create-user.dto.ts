import { IntersectionType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class CreateUserAndProfileDto extends IntersectionType(
  CreateUserDto,
  CreateProfileDto,
) {}
