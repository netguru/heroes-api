import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database';

@Injectable()
export class AvatarsService {
  constructor(private readonly database: PrismaService) {}

  avatars(args?: Prisma.AvatarFindManyArgs) {
    return this.database.avatar.findMany(args);
  }

  avatar(args?: Omit<Prisma.AvatarFindUniqueArgs, 'rejectOnNotFound'>) {
    return this.database.avatar.findUnique({ rejectOnNotFound: true, ...args });
  }

  count(args?: Prisma.AvatarCountArgs): Promise<number> {
    return this.database.avatar.count(args);
  }

  create(data: Prisma.AvatarCreateInput) {
    return this.database.avatar.create({ data });
  }

  update(where: Prisma.AvatarWhereUniqueInput, data: Prisma.AvatarUpdateInput) {
    return this.database.avatar.update({ where, data });
  }

  delete(where: Prisma.AvatarWhereUniqueInput) {
    return this.database.avatar.delete({ where });
  }
}
