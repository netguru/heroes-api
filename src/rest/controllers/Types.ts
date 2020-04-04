import { Request, Response } from 'express';

import { prisma } from '../../../generated/prisma-client';

export async function getAllTypes(req: Request, res: Response) {
  const types = await prisma.types();

  res.send(types);
}

export async function createType(req: Request, res: Response) {
  const {
    body: { name },
  } = req;

  if (name) {
    try {
      const newType = await prisma.createType({
        name,
      });

      res.send(newType);
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    res.status(500).send('name is required');
  }
}

export async function deleteType(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedType = await prisma.deleteType({
      id,
    });
    res.send(deletedType);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export async function updateType(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const {
      body: { name },
    } = req;
    const updatedType = await prisma.updateType({
      data: {
        name,
      },
      where: {
        id,
      },
    });
    res.send(updatedType);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
