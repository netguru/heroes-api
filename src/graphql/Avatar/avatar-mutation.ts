import { Context } from '@interface/prisma';

import {
  AvatarCreateInput,
  AvatarUpdateInput,
  AvatarWhereUniqueInput,
} from '../../../generated/prisma-client';

type UpdateAvatarProps = AvatarUpdateInput & { id: string };

export const avatarMutation = {
  createNewAvatar: async (
    parent: any,
    { avatar_url, alt }: AvatarCreateInput,
    { prisma: { createAvatar }, response }: Context
  ) => {
    if (avatar_url && alt) {
      try {
        return await createAvatar({
          alt,
          avatar_url,
        });
      } catch (error) {
        return response.status(500).send(error.message);
      }
    }
    return response.status(403).send({
      message: 'Bad Request',
    });
  },

  deleteAvatar: async (
    parent: any,
    { id }: AvatarWhereUniqueInput,
    { prisma: { deleteAvatar }, response }: Context
  ) => {
    if (id) {
      try {
        return await deleteAvatar({ id });
      } catch (error) {
        return response.status(500).send(error.message);
      }
    }

    return response.status(403).send({
      message: 'Bad Request',
    });
  },

  updateAvatar: async (
    parent: any,
    { id, alt, avatar_url }: UpdateAvatarProps,
    { prisma: { updateAvatar }, response }: Context
  ) => {
    if (id && (alt || avatar_url)) {
      try {
        return await updateAvatar({
          data: {
            avatar_url,
            alt,
          },
          where: {
            id,
          },
        });
      } catch (error) {
        return response.status(500).send(error.message);
      }
    }

    return response.status(403).send({
      message: 'Bad Request',
    });
  },
};
