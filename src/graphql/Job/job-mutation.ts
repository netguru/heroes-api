import { Context } from '@interface/prisma';

export const jobMutation = {
  createNewJob: async (
    parent,
    { name, description = '' },
    { prisma: { createJob } }: Context,
  ) =>
    await createJob({
      name,
      description,
    }),
};
