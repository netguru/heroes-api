import { Context } from '@interface/prisma';
import { ErrorHandler } from '../../utils';

export const typeMutation = {
  createNewType: async (
    parent,
    { name },
    { prisma: { createType } }: Context
  ) => {
    if (name) {
      return await createType({
        name,
      });
    }

    throw new Error(ErrorHandler.BAD_REQUEST);
  },
};
