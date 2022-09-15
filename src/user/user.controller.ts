import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './profile/dto/create-profile.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserAndProfileDto: CreateUserDto & CreateProfileDto) {
    const { age, bio, email, firstname, lastname, password, username } =
      createUserAndProfileDto;

    return this.userService.create({
      email,
      password,
      username,
      profile: {
        create: {
          age,
          bio,
          firstname,
          lastname,
        },
      },
    });
  }

  @Get()
  findAll() {
    return this.userService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete({
      id,
    });
  }
}
