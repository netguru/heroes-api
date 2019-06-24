import { Context } from '@interface/prisma';
<<<<<<< HEAD
import { ErrorHandler } from '../../utils';
=======
import { ErrorHandler } from '@utils/error-handler';
>>>>>>> bb6be90c703d16ff88d299aec8b0b8c52f2f031c

export const heroMutation = {
  createNewHero: async (
    parent,
    { full_name, type_id, avatar_url },
    { prisma: { createHero }, response }: Context,
  ) => {
    if (full_name && type_id && avatar_url) {
      return await createHero({
        full_name,
        avatar_url,
        type: {
          connect: {
            id: type_id,
          },
        },
      });
    }

    throw new Error(ErrorHandler.BAD_REQUEST);
  },

  updateHero: async (
    parent,
    { id, full_name, avatar_url, type },
    { prisma: { updateHero }, response }: Context,
  ) => {
    if (id) {
      if (type) {
        return await updateHero({
          data: {
            full_name,
            avatar_url,
            type: {
              connect: {
                id: type,
              },
            },
          },
          where: {
            id,
          },
        });
      }

      return await updateHero({
        data: {
          full_name,
          avatar_url,
        },
        where: {
          id,
        },
      });
    }
    throw new Error(ErrorHandler.BAD_REQUEST);
  },

  deleteHero: async (
    parent,
    { id },
    { prisma: { deleteHero }, response }: Context,
  ) => {
    if (id) {
      return await deleteHero({ id });
    }

    throw new Error(ErrorHandler.CANT_FIND_QUERY);
  },
};
