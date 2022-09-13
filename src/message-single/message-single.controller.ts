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

@Controller('message-singles')
export class MessageSingleController {
  constructor(private readonly messageSingleService: MessageSingleService) {}

  @Post()
  create(@Body() createMessageSingleDto: CreateMessageSingleDto) {
    return this.messageSingleService.create({
      ...createMessageSingleDto,
      seen: false,
      sent: false,
    });
  }

  @Get()
  findAll() {
    return this.messageSingleService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageSingleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
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
  delete(@Param('id') id: string) {
    return this.messageSingleService.delete({
      id,
    });
  }
}
