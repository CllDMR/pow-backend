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

@Controller('chat-multiples')
export class ChatMultipleController {
  constructor(private readonly chatMultipleService: ChatMultipleService) {}

  @Post()
  create(@Body() createChatMultipleDto: CreateChatMultipleDto) {
    return this.chatMultipleService.create(createChatMultipleDto);
  }

  @Get()
  findAll() {
    return this.chatMultipleService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatMultipleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChatMultipleDto: UpdateChatMultipleDto,
  ) {
    return this.chatMultipleService.update({
      where: {
        id,
      },
      data: updateChatMultipleDto,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.chatMultipleService.delete({
      id,
    });
  }
}
