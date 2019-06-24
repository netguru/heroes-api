import { Context } from '@interface/prisma';

export const heroQuery = {
  heroes: async (parent, { id }, { prisma: { heroes } }: Context) => {
    if (!id) {
      return await heroes();
    }

    return await heroes({
      where: {
        type: {
          id,
        },
      },
    });
  },
};
