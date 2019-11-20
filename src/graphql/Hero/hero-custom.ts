import { Context } from '@interface/prisma';

interface TypeProps {
  id: string;
}

export const Hero = {
  type: async ({ id }: TypeProps, args: any, { prisma: { hero } }: Context) =>
    await hero({ id }).type(),
};
