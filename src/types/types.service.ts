import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database';
import { TypeDto } from './dtos';

@Injectable()
export class TypesService {
  constructor(private readonly database: PrismaService) {}

  types(args?: Prisma.TypeFindManyArgs) {
    return this.database.type.findMany(args);
  }

  async type(args?: Omit<Prisma.TypeFindUniqueArgs, 'rejectOnNotFound'>) {
    return this.database.type.findUnique({
      rejectOnNotFound: true,
      ...args,
    });
  }

  count(): Promise<number> {
    return this.database.type.count();
  }

  create(data: Prisma.TypeCreateInput): Promise<TypeDto> {
    return this.database.type.create({ data });
  }

  update(where: Prisma.TypeWhereUniqueInput, data: Prisma.TypeUpdateInput) {
    return this.database.type.update({
      where,
      data,
    });
  }

  delete(where: Prisma.TypeWhereUniqueInput) {
    return this.database.type.delete({ where });
  }
}
