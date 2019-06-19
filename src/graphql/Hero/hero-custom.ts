import { Context } from '@interface/prisma';

export const Hero = {
  type: async ({ id }, args, { prisma: { hero } }: Context) =>
    await hero({ id }).type(),
};
