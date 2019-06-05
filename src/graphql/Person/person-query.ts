import { Context } from '@interface/prisma';

export const personQuery = {
  getAllPersons: async (parent, args, { prisma: { persons } }: Context) =>
    await persons(),
};
