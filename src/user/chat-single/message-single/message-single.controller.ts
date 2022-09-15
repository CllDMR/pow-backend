import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageSingleDto } from './dto/create-message-single.dto';
import { UpdateMessageSingleDto } from './dto/update-message-single.dto';
import { MessageSingleService } from './message-single.service';

@Controller('users/:userId/chat-singles/:chatSingleId/message-singles')
export class MessageSingleController {
  constructor(private readonly messageSingleService: MessageSingleService) {}

  @Post()
  create(
    @Param('userId') userId: string,
    @Param('chatSingleId') chatSingleId: string,
    @Body() createMessageSingleDto: CreateMessageSingleDto,
  ) {
    return this.messageSingleService.create({
      ...createMessageSingleDto,
      seen: false,
      sent: false,
      ChatSingle: {
        connect: {
          id: chatSingleId,
        },
      },
    });
  }

  @Get()
  findAll(
    @Param('userId') userId: string,
    @Param('chatSingleId') chatSingleId: string,
  ) {
    return this.messageSingleService.findAll({
      where: {
        chatSingleId,
      },
    });
  }

  @Get(':id')
  findOne(
    @Param('userId') userId: string,
    @Param('chatSingleId') chatSingleId: string,
    @Param('id') id: string,
  ) {
    return this.messageSingleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('chatSingleId') chatSingleId: string,
    @Param('id') id: string,
    @Body() updateMessageSingleDto: UpdateMessageSingleDto,
  ) {
    return this.messageSingleService.update({
      where: {
        id,
      },
      data: updateMessageSingleDto,
    });
  }

  @Delete(':id')
  delete(
    @Param('userId') userId: string,
    @Param('chatSingleId') chatSingleId: string,
    @Param('id') id: string,
  ) {
    return this.messageSingleService.delete({
      id,
    });
  }
}
