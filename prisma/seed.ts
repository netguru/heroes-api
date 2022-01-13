import { PrismaClient } from '@prisma/client';
import {
  animalTypeSeed,
  humanTypeSeed,
  plantTypeSeed,
  otherTypeSeed,
} from './seeds/types.seed';
import {
  humanHeroesSeed,
  animalHeroesSeed,
  plantHeroesSeed,
  otherHeroesSeed,
} from './seeds/heroes.seed';

const prisma = new PrismaClient();

const sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper aliquet porttitor.`;

async function main() {
  const [humanType, animalType, plantType, otherType] = await Promise.all([
    prisma.type.create({ data: humanTypeSeed }),
    prisma.type.create({ data: animalTypeSeed }),
    prisma.type.create({ data: plantTypeSeed }),
    prisma.type.create({ data: otherTypeSeed }),
  ]);

  await prisma.hero.createMany({
    data: animalHeroesSeed.map((heroSeed) => ({
      description: 'Lorem ipsum',
      typeId: animalType.id,
      ...heroSeed,
    })),
  });

  await prisma.hero.createMany({
    data: humanHeroesSeed.map((heroSeed) => ({
      description: sentence,
      typeId: humanType.id,
      ...heroSeed,
    })),
  });

  await prisma.hero.createMany({
    data: plantHeroesSeed.map((heroSeed) => ({
      description: sentence,
      typeId: plantType.id,
      ...heroSeed,
    })),
  });

  await prisma.hero.createMany({
    data: otherHeroesSeed.map((heroSeed) => ({
      description: sentence,
      typeId: otherType.id,
      ...heroSeed,
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
