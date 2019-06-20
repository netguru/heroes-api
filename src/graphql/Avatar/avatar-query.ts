import { Context } from '@interface/prisma';

export const avatarQuery = {
  avatars: async (parent, { ID }, { prisma: { avatars } }: Context) => {
    if (!ID) {
      return await avatars();
    }
    return await avatars({
      where: {
        id: ID,
      },
    });
  },
};
