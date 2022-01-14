import { Request, Response } from 'express';

import { heroesWithTypes } from '../../utils/fragments';
import {
  getMissingFields,
  getMissingFieldsErrorText,
} from '../../utils/error-handler';
import { prisma } from '../../../generated/prisma-client';

export async function getAllHeroes(req: Request, res: Response) {
  const { first, skip } = req.query;
  const data = await prisma
    .heroes({
      first: parseInt(first),
      skip: parseInt(skip),
    })
    .$fragment(heroesWithTypes);

  const totalCount: number = await prisma
    .heroesConnection()
    .aggregate()
    .count();

  res.send({ data, total_count: totalCount });
}

export async function getHeroById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const hero = await prisma
      .hero({
        id,
      })
      .$fragment(heroesWithTypes);

    if (!hero) {
      res.status(404).send('not found');
    } else {
      res.send(hero);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
}

export async function createHero(req: Request, res: Response) {
  const {
    body: { avatar_url, full_name, type, description = '' },
  } = req;

  const missingFields = getMissingFields(req.body);

  if (!missingFields.length) {
    try {
      const newHero = await prisma
        .createHero({
          avatar_url,
          full_name,
          description,
          type: { connect: { id: type } },
        })
        .$fragment(heroesWithTypes);

      res.send(newHero);
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    res.status(422).send(getMissingFieldsErrorText(missingFields));
  }
}

export async function deleteHero(req: Request, res: Response) {
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

export async function getRandomHero(req: Request, res: Response) {
  try {
    const count = await prisma
      .heroesConnection()
      .aggregate()
      .count();
    const skip = Math.floor(Math.random() * count);

    const randomHero = await prisma
      .heroes({ skip, first: 1 })
      .$fragment(heroesWithTypes);
    res.send(randomHero);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export async function updateHero(req: Request, res: Response) {
  const { id } = req.params;
  const {
    body: { avatar_url, full_name, type, description },
  } = req;

  const missingFields = getMissingFields(req.body);

  if (!missingFields.length) {
    try {
      const connect = type
        ? {
            connect: {
              id: type,
            },
          }
        : {};

      const updatedHero = await prisma
        .updateHero({
          data: {
            avatar_url,
            full_name,
            type: connect,
            description,
          },
          where: {
            id,
          },
        })
        .$fragment(heroesWithTypes);
      res.send(updatedHero);
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    res.status(422).send(getMissingFieldsErrorText(missingFields));
  }
}
