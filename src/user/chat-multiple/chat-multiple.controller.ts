import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChatMultipleService } from './chat-multiple.service';
import { CreateChatMultipleDto } from './dto/create-chat-multiple.dto';
import { UpdateChatMultipleDto } from './dto/update-chat-multiple.dto';

@Controller('users/:userId/chat-multiples')
export class ChatMultipleController {
  constructor(private readonly chatMultipleService: ChatMultipleService) {}

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createChatMultipleDto: CreateChatMultipleDto,
  ) {
    return this.chatMultipleService.create({
      ...createChatMultipleDto,
      users: {
        connect: {
          id: userId,
        },
      },
    });
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.chatMultipleService.findAll({
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
    return this.chatMultipleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateChatMultipleDto: UpdateChatMultipleDto,
  ) {
    return this.chatMultipleService.update({
      where: {
        id,
      },
      data: {},
    });
  }

  @Delete(':id')
  delete(@Param('userId') userId: string, @Param('id') id: string) {
    return this.chatMultipleService.delete({
      id,
    });
  }
}
