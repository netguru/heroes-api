import { Context } from '@interface/prisma';

export const typeQuery = {
  types: async (parent: any, args: any, { prisma: { types } }: Context) => await types(),
};
