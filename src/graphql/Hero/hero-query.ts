import { Context } from '@interface/prisma';

export const heroQuery = {
  getAllHeroes: async (parent, args, { prisma: { heroes } }: Context) =>
    await heroes(),

  getHeroByJobID: async (parent, { ID }, { prisma: { heroes } }: Context) =>
    await heroes({
      where: {
        type: {
          id: ID,
        },
      },
    }),
};
