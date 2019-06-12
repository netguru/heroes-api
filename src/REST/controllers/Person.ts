import { prisma } from '../../../generated/prisma-client';

export async function addNewPerson(req, res) {
  const {
    body: { first_name, last_name, job_id },
  } = req;

  const newUser = await prisma.createPerson({
    first_name,
    last_name,
    job: job_id,
  });

  res.send(newUser);
}

export async function getAllPersons(req, res) {
  const all = await prisma.persons();

  res.send(all);
}
