import { Context } from '@interface/prisma';

export const postMutation = {
  createNewPost: async (
    parent,
    { title, author },
    { prisma: { createPost } }: Context,
  ) =>
    await createPost({
      title,
      author: {
        connect: {
          id: author,
        },
      },
    }),
};
