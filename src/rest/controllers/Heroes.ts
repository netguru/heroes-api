import { prisma } from '../../../generated/prisma-client';
import { heroesWithTypes } from '../../utils/fragments';

export async function getAllHeroes(req, res) {
  const { first, skip } = req.query;
  const heroes = await prisma
    .heroes({
      first: parseInt(first),
      skip: parseInt(skip),
    })
    .$fragment(heroesWithTypes);

  res.send(heroes);
}

export async function getHeroById(req, res) {
  try {
    const { id } = req.params;
    const hero = await prisma
      .hero({
        id,
      })
      .$fragment(heroesWithTypes);
    res.send(hero);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

export async function createHero(req, res) {
  const {
    body: { avatar_url, full_name, type, description },
  } = req;

  if (full_name && type) {
    try {
      const newHero = await prisma.createHero({
        avatar_url,
        full_name,
        description,
        type: { connect: { id: type } },
      });

      res.send(newHero);
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    res.status(500).send('full_name and type are required');
  }
}

export async function deleteHero(req, res) {
  try {
    const { id } = req.params;
    const deletedHero = await prisma.deleteHero({
      id,
    });
    res.send(deletedHero);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export async function updateHero(req, res) {
  try {
    const { id } = req.params;
    const {
      body: { avatar_url, full_name, type },
    } = req;

    const connect = type
      ? {
          connect: {
            id: type,
          },
        }
      : {};

    const updatedHero = await prisma.updateHero({
      data: {
        avatar_url,
        full_name,
        type: connect,
      },
      where: {
        id,
      },
    });
    res.send(updatedHero);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
