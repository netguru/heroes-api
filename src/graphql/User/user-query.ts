import { Context } from '@interface/prisma';

export const userQuery = {
  getAllUsers: async (parent, args, { prisma: { users } }: Context) =>
    await users(),
};
