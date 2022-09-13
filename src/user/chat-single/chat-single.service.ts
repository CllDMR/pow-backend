import { Injectable } from '@nestjs/common';
import { ChatSingle, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatSingleService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    chatSingleWhereUniqueInput: Prisma.ChatSingleWhereUniqueInput,
  ): Promise<ChatSingle | null> {
    return this.prisma.chatSingle.findUnique({
      where: chatSingleWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatSingleWhereUniqueInput;
    where?: Prisma.ChatSingleWhereInput;
    orderBy?: Prisma.ChatSingleOrderByWithRelationInput;
  }): Promise<ChatSingle[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.chatSingle.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.ChatSingleCreateInput): Promise<ChatSingle> {
    return this.prisma.chatSingle.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.ChatSingleWhereUniqueInput;
    data: Prisma.ChatSingleUpdateInput;
  }): Promise<ChatSingle> {
    const { data, where } = params;
    return this.prisma.chatSingle.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ChatSingleWhereUniqueInput): Promise<ChatSingle> {
    return this.prisma.chatSingle.delete({
      where,
    });
  }
}
