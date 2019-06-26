import { Context } from '@interface/prisma';

export const heroQuery = {
  heroes: async (
    parent,
    { type_id, name_query },
    { prisma: { heroes } }: Context,
  ) => {
    if (type_id) {
      return await heroes({
        where: {
          type: {
            id: type_id,
          },
        },
      });
    }

    if (name_query) {
      return await heroes({
        where: {
          full_name_contains: name_query,
        },
      });
    }

    return await heroes();
  },
};
