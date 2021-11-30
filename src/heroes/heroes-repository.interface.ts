import { Prisma } from '@prisma/client';
import { HeroDto } from './dtos';

export interface HeroesRepository {
  heroes(args?: Omit<Prisma.HeroFindManyArgs, 'include'>): Promise<HeroDto[]>;

  hero(args?: Omit<Prisma.HeroFindUniqueArgs, 'include'>): Promise<HeroDto>;

  count(args?: Prisma.HeroCountArgs): Promise<number>;

  create(data: Prisma.HeroCreateInput): Promise<HeroDto>;

  update(
    where: Prisma.HeroWhereUniqueInput,
    data: Prisma.HeroUpdateInput,
  ): Promise<HeroDto>;

  delete(where: Prisma.HeroWhereUniqueInput): Promise<HeroDto>;

  random(): Promise<HeroDto>;
}
