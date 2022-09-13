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

@Controller('chat-singles')
export class ChatSingleController {
  constructor(private readonly chatSingleService: ChatSingleService) {}

  @Post()
  create(@Body() createChatSingleDto: CreateChatSingleDto) {
    return this.chatSingleService.create(createChatSingleDto);
  }

  @Get()
  findAll() {
    return this.chatSingleService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatSingleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChatSingleDto: UpdateChatSingleDto,
  ) {
    return this.chatSingleService.update({
      where: {
        id,
      },
      data: updateChatSingleDto,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.chatSingleService.delete({
      id,
    });
  }
}
