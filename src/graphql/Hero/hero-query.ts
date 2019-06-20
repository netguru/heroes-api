import { Context } from '@interface/prisma';

export const heroQuery = {
  heroes: async (parent, { ID }, { prisma: { heroes } }: Context) => {
    if (!ID) {
      return await heroes();
    }

    return await heroes({
      where: {
        type: {
          id: ID,
        },
      },
    });
  },
};
