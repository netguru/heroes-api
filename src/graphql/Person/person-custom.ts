import { Context } from '@interface/prisma';

export const Person = {
  job: async ({ id }, args, { prisma: { person } }: Context) =>
    await person({ id }).job(),
};
