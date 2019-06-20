import { Context } from '@interface/prisma';

export const heroMutation = {
  createNewHero: async (
    parent,
    { full_name, type_id, avatar_url },
    { prisma: { createHero } }: Context,
  ) => {
    return await createHero({
      full_name,
      avatar_url,
      type: {
        connect: {
          id: type_id,
        },
      },
    });
  },
};
