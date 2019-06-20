import { prisma } from '../../../generated/prisma-client';

export async function getAllTypes(req, res) {
  const types = await prisma.types();

  res.send(types);
}

export async function getTypeById(req, res) {
  try {
    const { id } = req.params;
    const type = await prisma.type({ id });
    res.send({ type });
  } catch (e) {
    res.status(404).send(e.message);
  }
}

export async function createType(req, res) {
  const {
    body: { name, description },
  } = req;

  if (name) {
    try {
      const newType = await prisma.createType({
        name,
        description,
      });

      res.send(newType);
    } catch (e) {
      res.status(404).send(e.message);
    }
  } else {
    res.status(500).send('name is required');
  }
}

export async function deleteType(req, res) {
  try {
    const { id } = req.params;
    const deletedType = await prisma.deleteType({
      id,
    });
    res.send(deletedType);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

export async function updateType(req, res) {
  try {
    const id = req.params.id;
    const {
      body: { name, description },
    } = req;
    const updatedType = await prisma.updateType({
      data: {
        name,
        description,
      },
      where: {
        id,
      },
    });
    res.send(updatedType);
  } catch (e) {
    res.status(404).send(e.message);
  }
}
