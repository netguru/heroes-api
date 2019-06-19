import { Context } from '@interface/prisma';

export const avatarQuery = {
  getAllAvatars: async (parent, args, { prisma: { avatars } }: Context) =>
    await avatars(),
};
