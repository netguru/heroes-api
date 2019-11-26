import { IHero } from '@interface/hero';

import { config } from 'dotenv';

config();

const { HOST, PORT } = process.env;

export const SEED_HUMAN_HERO: IHero[] = [
  {
    full_name: 'Batman',
    avatar_url: `${HOST}${PORT}/assets/batman.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },
  {
    full_name: 'Wrestler',
    avatar_url: `${HOST}${PORT}/assets/wrestler.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },
  {
    full_name: 'Donald Trump',
    avatar_url: `${HOST}${PORT}/assets/trump.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },
  {
    full_name: 'Harley Quinn',
    avatar_url: `${HOST}${PORT}/assets/harley_queen.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },

  {
    full_name: 'Albert Einstain',
    avatar_url: `${HOST}${PORT}/assets/einstein.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },
  {
    full_name: 'Ozzy',
    avatar_url: `${HOST}${PORT}/assets/ozzy.png`,
    type: '#ID',
    description:
      'Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.',
  },
];

export const SEED_PLANT_HERO: IHero[] = [
  {
    full_name: 'The Cactus',
    avatar_url: `${HOST}${PORT}/assets/cactus.png`,
    type: '#ID',
    description:
      'Quisque diam sapien, euismod sed ornare feugiat, vulputate nec tellus.',
  },
  {
    full_name: 'The Avocado',
    avatar_url: `${HOST}${PORT}/assets/avocado.png`,
    type: '#ID',
    description:
      'Quisque diam sapien, euismod sed ornare feugiat, vulputate nec tellus.',
  },
];

export const SEED_ANIMAL_HERO: IHero[] = [
  {
    full_name: 'Sluggard',
    avatar_url: `${HOST}${PORT}/assets/sluggard.png`,
    type: '#ID',
    description:
      'Quisque diam sapien, euismod sed ornare feugiat, vulputate nec tellus.',
  },
  {
    full_name: 'Cool Sheep',
    avatar_url: `${HOST}${PORT}/assets/sheep.png`,
    type: '#ID',
    description:
      'Quisque diam sapien, euismod sed ornare feugiat, vulputate nec tellus.',
  },
];

export const SEED_OTHER_HERO: IHero[] = [
  {
    full_name: 'Shelba',
    avatar_url: `${HOST}${PORT}/assets/spider.png`,
    type: '#ID',
    description:
      'Pellentesque efficitur, nisl et pulvinar iaculis, lacus eros faucibus leo, quis vestibulum quam velit ac sapien.',
  },
  {
    full_name: 'UFO',
    avatar_url: `${HOST}${PORT}/assets/ufo.png`,
    type: '#ID',
    description:
      'Pellentesque efficitur, nisl et pulvinar iaculis, lacus eros faucibus leo, quis vestibulum quam velit ac sapien.',
  },
];
