import { Context } from '@interface/prisma';

interface HeroesProps {
  type_id: string;
  name_query: string;
  skip: number;
  first: number;
}

interface HeroProps {
  id: string;
}

export const heroQuery = {
  heroes: async (
    parent: any,
    { type_id, name_query, skip, first }: HeroesProps,
    { prisma: { heroes, heroesConnection } }: Context
  ) => {
    const totalCount: number = await heroesConnection()
      .aggregate()
      .count();

    const data = await heroes({
      where: {
        full_name_contains: name_query,

        type: {
          id: type_id,
        },
      },
      skip,
      first,
    });

    return {
      data,
      total_count: totalCount,
    };
  },
  hero: async (
    parent: any,
    { id }: HeroProps,
    { prisma: { hero } }: Context
  ) => {
    return await hero({
      id,
    });
  },
  randomHero: async (
    parent: any,
    {  }: any,
    { prisma: { heroes, heroesConnection } }: Context
  ) => {
    const count = await heroesConnection()
      .aggregate()
      .count();
    const skip = Math.floor(Math.random() * count);

    return await heroes({ skip, first: 1 }).then(
      oneElementArray => oneElementArray[0]
    );
  },
};
