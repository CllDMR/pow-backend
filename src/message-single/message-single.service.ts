import { Injectable } from '@nestjs/common';
import { MessageSingle, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageSingleService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    messageSingleWhereUniqueInput: Prisma.MessageSingleWhereUniqueInput,
  ): Promise<MessageSingle | null> {
    return this.prisma.messageSingle.findUnique({
      where: messageSingleWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageSingleWhereUniqueInput;
    where?: Prisma.MessageSingleWhereInput;
    orderBy?: Prisma.MessageSingleOrderByWithRelationInput;
  }): Promise<MessageSingle[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.messageSingle.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.MessageSingleCreateInput): Promise<MessageSingle> {
    return this.prisma.messageSingle.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.MessageSingleWhereUniqueInput;
    data: Prisma.MessageSingleUpdateInput;
  }): Promise<MessageSingle> {
    const { data, where } = params;
    return this.prisma.messageSingle.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.MessageSingleWhereUniqueInput,
  ): Promise<MessageSingle> {
    return this.prisma.messageSingle.delete({
      where,
    });
  }
}
