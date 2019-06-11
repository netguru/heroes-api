import { prisma } from './generated/prisma-client';

export async function main() {
  const Docktor = await prisma.createJob({
    name: 'Docktor',
    description: 'Lorem ipsum',
  });

  const Person_1 = await prisma.createPerson({
    first_name: 'John',
    last_name: 'Doe',
    job: {
      connect: {
        id: Docktor.id,
      },
    },
  });
}

main().catch((error) => console.log(error));
