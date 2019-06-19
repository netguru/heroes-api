import { Context } from '@interface/prisma';

export const typeMutation = {
  createNewType: async (
    parent,
    { name, description = '' },
    { prisma: { createType } }: Context,
  ) =>
    await createType({
      name,
      description,
    }),
};
