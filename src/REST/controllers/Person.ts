import { prisma } from "../../../generated/prisma-client";

export async function addNewPerson(req, res) {
  const {
    body: { first_name, last_name, job_id }
  } = req;

  const newUser = await prisma.createPerson({
    first_name,
    last_name,
    job: job_id
  });

  res.send(newUser);
}

export async function getAllPersons(req, res) {
  const all = await prisma.persons();

  res.send(all);
}

export async function getSinglePerson(req, res) {
  const { body } = req;

  const { id } = body;

  const person = await prisma.person({ id });

  if (!person) {
    return res.send({
      message: "No user"
    });
  }

  return person;
}
