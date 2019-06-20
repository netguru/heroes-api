import { Context } from '@interface/prisma';

export const typeQuery = {
  types: async (parent, args, { prisma: { types } }: Context) => await types(),
};
