import { prisma } from '../../../generated/prisma-client';

export async function getAllAvatars(req, res) {
  const avatars = await prisma.avatars();

  res.send(avatars);
}

export async function createAvatar(req, res) {
  const {
    body: { alt, avatar_url },
  } = req;

  if (alt && avatar_url) {
    try {
      const newAvatar = await prisma.createAvatar({
        alt,
        avatar_url,
      });

      res.send(newAvatar);
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    res.status(500).send('alt and avatar_url are required');
  }
}

export async function deleteAvatar(req, res) {
  try {
    const { id } = req.params;
    const deletedAvatar = await prisma.deleteAvatar({
      id,
    });
    res.send(deletedAvatar);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export async function updateAvatar(req, res) {
  try {
    const { id } = req.params;
    const {
      body: { alt, avatar_url },
    } = req;
    const updatedAvatar = await prisma.updateAvatar({
      data: {
        alt,
        avatar_url,
      },
      where: {
        id,
      },
    });
    res.send(updatedAvatar);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
