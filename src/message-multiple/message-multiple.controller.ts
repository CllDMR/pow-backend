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

@Controller('message-multiples')
export class MessageMultipleController {
  constructor(
    private readonly messageMultipleService: MessageMultipleService,
  ) {}

  @Post()
  create(@Body() createMessageMultipleDto: CreateMessageMultipleDto) {
    return this.messageMultipleService.create(createMessageMultipleDto);
  }

  @Get()
  findAll() {
    return this.messageMultipleService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageMultipleService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
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
  delete(@Param('id') id: string) {
    return this.messageMultipleService.delete({
      id,
    });
  }
}
