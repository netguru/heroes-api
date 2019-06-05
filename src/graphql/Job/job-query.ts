import { Context } from '@interface/prisma';

export const jobQuery = {
  getAllJobs: async (parent, args, { prisma: { jobs } }: Context) =>
    await jobs(),
};
