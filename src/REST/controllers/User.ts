import { prisma } from '../../../generated/prisma-client';

export async function AddNewUser(req, res) {
  const newUser = await prisma.createUser({
    name: 'Hello',
    email: 'test@netguru.pl',
  });

  res.send(newUser);
}

export async function AllUsers(req, res) {
  const all = await prisma.users();

  res.send(all);
}
