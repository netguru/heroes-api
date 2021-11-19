import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database';

@Injectable()
export class AvatarsService {
  constructor(private database: PrismaService) {}

  avatars(args?: Prisma.AvatarFindManyArgs) {
    return this.database.avatar.findMany(args);
  }

  async avatar(args?: Prisma.AvatarFindUniqueArgs) {
    const avatar = await this.database.avatar.findUnique(args);
    if (!avatar) {
      throw new HttpException('Avatar not found', HttpStatus.NOT_FOUND);
    }
    return avatar;
  }

  create(data: Prisma.AvatarCreateInput) {
    return this.database.avatar.create({ data });
  }

  update(where: Prisma.AvatarWhereUniqueInput, data: Prisma.AvatarUpdateInput) {
    return this.database.avatar.update({ where, data });
  }

  async delete(where: Prisma.AvatarWhereUniqueInput) {
    await this.database.avatar.delete({ where });
    return true;
  }
}
