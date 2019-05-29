import { Context } from '@interface/prisma';

export const User = {
  posts: async ({ id }, args, { prisma: { user } }: Context) =>
    await user({ id }).posts(),
};
