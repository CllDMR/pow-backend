import { Injectable } from '@nestjs/common';
import { MessageMultiple, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageMultipleService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    messageMultipleWhereUniqueInput: Prisma.MessageMultipleWhereUniqueInput,
  ): Promise<MessageMultiple | null> {
    return this.prisma.messageMultiple.findUnique({
      where: messageMultipleWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageMultipleWhereUniqueInput;
    where?: Prisma.MessageMultipleWhereInput;
    orderBy?: Prisma.MessageMultipleOrderByWithRelationInput;
  }): Promise<MessageMultiple[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.messageMultiple.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(
    data: Prisma.MessageMultipleCreateInput,
  ): Promise<MessageMultiple> {
    return this.prisma.messageMultiple.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.MessageMultipleWhereUniqueInput;
    data: Prisma.MessageMultipleUpdateInput;
  }): Promise<MessageMultiple> {
    const { data, where } = params;
    return this.prisma.messageMultiple.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.MessageMultipleWhereUniqueInput,
  ): Promise<MessageMultiple> {
    return this.prisma.messageMultiple.delete({
      where,
    });
  }
}
