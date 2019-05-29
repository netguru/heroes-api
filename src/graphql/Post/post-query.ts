import { Context } from '@interface/prisma';

export const postQuery = {
  getAllPosts: async (parent, args, { prisma: { posts } }: Context) =>
    await posts(),
};
