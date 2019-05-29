import { Context } from '@interface/prisma';

export const Post = {
  author: async ({ id }, args, { prisma: { post } }: Context) =>
    await post({ id }).author(),
};
