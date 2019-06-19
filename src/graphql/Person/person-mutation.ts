import { Context } from '@interface/prisma';

export const personMutation = {
  createNewPerson: async (
    parent,
    { first_name, last_name, job_id },
    { prisma: { createPerson } }: Context
  ) => {
    return await createPerson({
      first_name,
      last_name,
      job: {
        connect: {
          id: job_id,
        },
      },
    });
  },
};
