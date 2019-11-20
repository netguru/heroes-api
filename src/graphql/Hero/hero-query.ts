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
    { prisma: { heroes } }: Context
  ) => {
    return await heroes({
      where: {
        full_name_contains: name_query,

        type: {
          id: type_id,
        },
      },
      skip,
      first,
    });
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
};
