import { Context } from '@interface/prisma';
import { ErrorHandler } from '@utils/error-handler';

export const typeMutation = {
  createNewType: async (
    parent,
    { name, description = '' },
    { prisma: { createType } }: Context,
  ) => {
    if (name && description) {
      return await createType({
        name,
        description,
      });
    }

    throw new Error(ErrorHandler.BAD_REQUEST);
  },
};
