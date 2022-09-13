import { Injectable } from '@nestjs/common';
import { ChatMultiple, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatMultipleService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    chatMultipleWhereUniqueInput: Prisma.ChatMultipleWhereUniqueInput,
  ): Promise<ChatMultiple | null> {
    return this.prisma.chatMultiple.findUnique({
      where: chatMultipleWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatMultipleWhereUniqueInput;
    where?: Prisma.ChatMultipleWhereInput;
    orderBy?: Prisma.ChatMultipleOrderByWithRelationInput;
  }): Promise<ChatMultiple[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.chatMultiple.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.ChatMultipleCreateInput): Promise<ChatMultiple> {
    return this.prisma.chatMultiple.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ChatMultipleWhereUniqueInput;
    data: Prisma.ChatMultipleUpdateInput;
  }): Promise<ChatMultiple> {
    const { data, where } = params;
    return this.prisma.chatMultiple.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.ChatMultipleWhereUniqueInput,
  ): Promise<ChatMultiple> {
    return this.prisma.chatMultiple.delete({
      where,
    });
  }
}
