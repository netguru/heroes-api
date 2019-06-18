import { Context } from '@interface/prisma';

export const personQuery = {
  getAllPersons: async (parent, args, { prisma: { persons } }: Context) =>
    await persons(),

  getPersonsByJobID: async (parent, { ID }, { prisma: { persons } }: Context) =>
    await persons({
      where: {
        job: {
          id: ID,
        },
      },
    }),
};
