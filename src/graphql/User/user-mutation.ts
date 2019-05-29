import { Context } from '@interface/prisma';

export const userMutation = {
  createNewUser: async (
    parent,
    { email, name },
    { prisma: { createUser } }: Context,
  ) => {
    return await createUser({
      email,
      name,
    });
  },
};
