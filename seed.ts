import { prisma } from './generated/prisma-client';

// Interfaces
import { IAvatar } from '@interface/avatar';

// Seed data
import { IHero } from '@interface/hero';
import { SEED_AVATARS } from './seed/avatar';
import {
  SEED_ANIMAL_HERO,
  SEED_HUMAN_HERO,
  SEED_OTHER_HERO,
  SEED_PLANT_HERO,
} from './seed/hero';

const avatarSeeds = SEED_AVATARS.map(
  async ({ alt, avatar_url }: IAvatar, index: number) => {
    const response = await prisma.createAvatar({
      alt,
      avatar_url,
    });

    return response;
  },
);

export async function main() {
  const avatarsSeed = await Promise.all(avatarSeeds);

  const humanTypeSeed = await prisma.createType({
    name: 'Human',
    description: 'It\' a human!',
  });

  const animalTypeSeed = await prisma.createType({
    name: 'Animal',
    description: 'Animal type',
  });

  const otherTypeSeed = await prisma.createType({
    name: 'Other',
    description: 'Can\'t even name it',
  });

  const plantTypeSeed = await prisma.createType({
    name: 'Plant',
    description: 'It\'s a plant!',
  });

  // HUMAN HERO SEED
  const humanHeroSeed = SEED_HUMAN_HERO.map(
    async ({ avatar_url, full_name, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        type: {
          connect: {
            id: type.replace('#ID', humanTypeSeed.id),
          },
        },
      });
    },
  );

  // ANIMAL HERO SEED
  const animalHeroSeed = SEED_ANIMAL_HERO.map(
    async ({ avatar_url, full_name, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        type: {
          connect: {
            id: type.replace('#ID', animalTypeSeed.id),
          },
        },
      });
    },
  );

  // PLANT HERO SEED
  const plantHeroSeed = SEED_PLANT_HERO.map(
    async ({ avatar_url, full_name, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        type: {
          connect: {
            id: type.replace('#ID', plantTypeSeed.id),
          },
        },
      });
    },
  );

  // OTHER HERO SEED
  const otherHeroSeed = SEED_OTHER_HERO.map(
    async ({ avatar_url, full_name, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        type: {
          connect: {
            id: type.replace('#ID', otherTypeSeed.id),
          },
        },
      });
    },
  );

  const allHeroes = Promise.all([
    humanHeroSeed,
    animalHeroSeed,
    plantHeroSeed,
    otherHeroSeed,
  ]);
}

main().catch((error) => console.log(error));
