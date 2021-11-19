import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database';

@Injectable()
export class TypesService {
  constructor(private database: PrismaService) {}

  types(args?: Prisma.TypeFindManyArgs) {
    return this.database.type.findMany(args);
  }

  async type(args?: Prisma.TypeFindUniqueArgs) {
    const type = await this.database.type.findUnique(args);
    if (!type) {
      throw new HttpException('Type not found', HttpStatus.NOT_FOUND);
    }
    return type;
  }

  create(data: Prisma.TypeCreateInput) {
    return this.database.type.create({ data });
  }

  update(where: Prisma.TypeWhereUniqueInput, data: Prisma.TypeUpdateInput) {
    return this.database.type.update({
      where,
      data,
    });
  }

  async delete(where: Prisma.TypeWhereUniqueInput) {
    await this.database.type.delete({ where });
    return true;
  }
}
