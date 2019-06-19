import { Context } from '@interface/prisma';

export const typeQuery = {
  getAllTypes: async (parent, args, { prisma: { types } }: Context) =>
    await types(),
};
