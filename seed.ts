import { prisma } from './generated/prisma-client';

// Interfaces
import { IAvatar } from '@interface/avatar';
import { IHero } from '@interface/hero';

// Seed data
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
  });

  const animalTypeSeed = await prisma.createType({
    name: 'Animal',
  });

  const otherTypeSeed = await prisma.createType({
    name: 'Other',
  });

  const plantTypeSeed = await prisma.createType({
    name: 'Plant',
  });

  // HUMAN HERO SEED
  const humanHeroSeed = SEED_HUMAN_HERO.map(
    async ({ avatar_url, full_name, description, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        description,
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
    async ({ avatar_url, full_name, description, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        description,
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
    async ({ avatar_url, full_name, description, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        description,
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
    async ({ avatar_url, full_name, description, type }: IHero, index: number) => {
      return prisma.createHero({
        full_name,
        avatar_url,
        description,
        type: {
          connect: {
            id: type.replace('#ID', otherTypeSeed.id),
          },
        },
      });
    },
  );
}

main().catch((error) => console.log(error));
