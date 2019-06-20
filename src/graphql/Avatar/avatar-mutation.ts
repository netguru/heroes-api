import { Context } from '@interface/prisma';

export const avatarMutation = {
  createNewAvatar: async (
    parent,
    { avatar_url, alt },
    { prisma: { createAvatar }, response }: Context,
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
    parent,
    { ID },
    { prisma: { deleteAvatar }, response }: Context,
  ) => {
    if (ID) {
      try {
        return await deleteAvatar({ id: ID });
      } catch (error) {
        return response.status(500).send(error.message);
      }
    }

    return response.status(403).send({
      message: 'Bad Request',
    });
  },

  updateAvatar: async (
    parent,
    { ID, alt, avatar_url },
    { prisma: { updateAvatar }, response }: Context,
  ) => {
    if (ID && (alt || avatar_url)) {
      try {
        return await updateAvatar({
          data: {
            avatar_url,
            alt,
          },
          where: {
            id: ID,
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
