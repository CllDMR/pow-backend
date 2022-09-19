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

@Controller('chat-multiples/:chatMultipleId/message-multiples')
export class MessageMultipleController {
  constructor(
    private readonly messageMultipleService: MessageMultipleService,
  ) {}

  @Post()
  create(
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
  findAll(@Param('chatMultipleId') chatMultipleId: string) {
    return this.messageMultipleService.findAll({
      where: {
        chatMultipleId,
      },
    });
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Param('chatMultipleId') chatMultipleId: string,
  ) {
    return this.messageMultipleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('chatMultipleId') chatMultipleId: string,
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
    @Param('id') id: string,
    @Param('chatMultipleId') chatMultipleId: string,
  ) {
    return this.messageMultipleService.delete({
      id,
    });
  }
}
