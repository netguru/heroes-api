import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database';

@Injectable()
export class HeroesService {
  constructor(private database: PrismaService) {}

  heroes(args?: Omit<Prisma.HeroFindManyArgs, 'include'>) {
    return this.database.hero.findMany({
      ...args,
      include: { type: true, avatar: true },
    });
  }

  hero(args?: Omit<Prisma.HeroFindUniqueArgs, 'include'>) {
    return this.database.hero.findUnique({
      ...args,
      include: { type: true, avatar: true },
    });
  }

  count(args?: Prisma.HeroCountArgs): Promise<number> {
    return this.database.hero.count(args);
  }

  async create(data: Prisma.HeroCreateInput) {
    return this.database.hero.create({
      data,
      include: { type: true, avatar: true },
    });
  }

  update(where: Prisma.HeroWhereUniqueInput, data: Prisma.HeroUpdateInput) {
    return this.database.hero.update({
      where,
      data,
      include: { type: true, avatar: true },
    });
  }

  delete(where: Prisma.HeroWhereUniqueInput) {
    return this.database.hero.delete({
      where,
      include: { type: true, avatar: true },
    });
  }

  async random() {
    const count = await this.count();
    const skip = Math.floor(Math.random() * count);
    const [hero] = await this.heroes({ skip, take: 1 });
    return hero;
  }
}
