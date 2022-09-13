import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChatSingleService } from './chat-single.service';
import { CreateChatSingleDto } from './dto/create-chat-single.dto';
import { UpdateChatSingleDto } from './dto/update-chat-single.dto';

@Controller('users/:userId/chat-singles')
export class ChatSingleController {
  constructor(private readonly chatSingleService: ChatSingleService) {}

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createChatSingleDto: CreateChatSingleDto,
  ) {
    return this.chatSingleService.create({
      users: {
        connect: {
          id: userId,
        },
      },
    });
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.chatSingleService.findAll({
      where: {
        users: {
          every: {
            id: userId,
          },
        },
      },
    });
  }

  @Get(':id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.chatSingleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateChatSingleDto: UpdateChatSingleDto,
  ) {
    return this.chatSingleService.update({
      where: {
        id,
      },
      data: {},
    });
  }

  @Delete(':id')
  delete(@Param('userId') userId: string, @Param('id') id: string) {
    return this.chatSingleService.delete({
      id,
    });
  }
}
