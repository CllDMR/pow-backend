import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageMultipleDto } from './dto/create-message-multiple.dto';
import { UpdateMessageMultipleDto } from './dto/update-message-multiple.dto';
import { MessageMultipleService } from './message-multiple.service';

@Controller('users/:userId/chat-multiples/:chatMultipleId/message-multiples')
export class MessageMultipleController {
  constructor(
    private readonly messageMultipleService: MessageMultipleService,
  ) {}

  @Post()
  create(
    @Param('userId') userId: string,
    @Param('chatMultipleId') chatMultipleId: string,
    @Body() createMessageMultipleDto: CreateMessageMultipleDto,
  ) {
    return this.messageMultipleService.create({
      ...createMessageMultipleDto,
      ChatMultiple: {
        connect: {
          id: chatMultipleId,
        },
      },
    });
  }

  @Get()
  findAll(
    @Param('userId') userId: string,
    @Param('chatMultipleId') chatMultipleId: string,
  ) {
    return this.messageMultipleService.findAll({
      where: {
        chatMultipleId,
      },
    });
  }

  @Get(':id')
  findOne(
    @Param('userId') userId: string,
    @Param('chatMultipleId') chatMultipleId: string,
    @Param('id') id: string,
  ) {
    return this.messageMultipleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('userId') userId: string,
    @Param('chatMultipleId') chatMultipleId: string,
    @Param('id') id: string,
    @Body() updateMessageMultipleDto: UpdateMessageMultipleDto,
  ) {
    return this.messageMultipleService.update({
      where: {
        id,
      },
      data: updateMessageMultipleDto,
    });
  }

  @Delete(':id')
  delete(
    @Param('userId') userId: string,
    @Param('chatMultipleId') chatMultipleId: string,
    @Param('id') id: string,
  ) {
    return this.messageMultipleService.delete({
      id,
    });
  }
}
