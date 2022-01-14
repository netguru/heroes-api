import { Context } from '@interface/prisma';

import { ErrorHandler } from '../../utils';

interface CreateNewTypeProps {
  name: string;
}

export const typeMutation = {
  createNewType: async (
    parent: any,
    { name }: CreateNewTypeProps,
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
