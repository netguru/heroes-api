import { prisma } from './generated/prisma-client';

export async function main() {
  const Doctor = await prisma.createJob({
    name: 'Doctor',
    description: 'Lorem ipsum',
  });

  const Person_1 = await prisma.createPerson({
    first_name: 'John',
    last_name: 'Doe',
    job: {
      connect: {
        id: Doctor.id,
      },
    },
  });
}

main().catch((error) => console.log(error));
