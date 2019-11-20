import { Context } from '@interface/prisma';

interface AvatarsProps {
  id: string;
}

export const avatarQuery = {
  avatars: async (
    parent: any,
    { id }: AvatarsProps,
    { prisma: { avatars } }: Context
  ) => {
    if (!id) {
      return await avatars();
    }
    return await avatars({
      where: {
        id,
      },
    });
  },
};
