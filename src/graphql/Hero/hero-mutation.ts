import { Context } from '@interface/prisma';

import { ErrorHandler } from '../../utils';
import {
  HeroCreateInput,
  HeroUpdateInput,
} from '../../../generated/prisma-client';

type UpdateHeroProps = HeroUpdateInput & { id: string; type_id: string };
type CreateNewHeroProps = HeroCreateInput & { type_id: string };
interface DeleteHeroProps {
  id: string;
}

export const heroMutation = {
  createNewHero: async (
    parent: any,
    { full_name, type_id, avatar_url, description }: CreateNewHeroProps,
    { prisma: { createHero }, response }: Context
  ) => {
    if (full_name && type_id && avatar_url && description) {
      return await createHero({
        full_name,
        avatar_url,
        description,
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
    parent: any,
    { id, full_name, avatar_url, type_id, description }: UpdateHeroProps,
    { prisma: { updateHero }, response }: Context
  ) => {
    if (id) {
      if (type_id) {
        return await updateHero({
          data: {
            full_name,
            avatar_url,
            description,
            type: {
              connect: {
                id: type_id,
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
          description,
        },
        where: {
          id,
        },
      });
    }
    throw new Error(ErrorHandler.BAD_REQUEST);
  },

  deleteHero: async (
    parent: any,
    { id }: DeleteHeroProps,
    { prisma: { deleteHero }, response }: Context
  ) => {
    if (id) {
      return await deleteHero({ id });
    }

    throw new Error(ErrorHandler.CANT_FIND_QUERY);
  },
};
