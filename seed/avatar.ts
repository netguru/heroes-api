import { IAvatar } from '@interface/avatar';

import { config } from 'dotenv';

config();

const { HOST, PORT } = process.env;

export const SEED_AVATARS: IAvatar[] = [
  {
    alt: 'St. Claus',
    avatar_url: `${HOST}${PORT}/assets/santa_claus.png`,
  },
  {
    alt: 'Wrestler',
    avatar_url: `${HOST}${PORT}/assets/wrestler.png`,
  },
  {
    alt: 'UFO',
    avatar_url: `${HOST}${PORT}/assets/ufo.png`,
  },
  {
    alt: 'Donald Trump',
    avatar_url: `${HOST}${PORT}/assets/trump.png`,
  },
  {
    alt: 'Harley Quinn',
    avatar_url: `${HOST}${PORT}/assets/harley_queen.png`,
  },
  {
    alt: 'Shelba',
    avatar_url: `${HOST}${PORT}/assets/spider.png`,
  },
  {
    alt: 'Sluggard',
    avatar_url: `${HOST}${PORT}/assets/sluggard.png`,
  },
  {
    alt: 'Cool Sheep',
    avatar_url: `${HOST}${PORT}/assets/sheep.png`,
  },
  {
    alt: 'Albert Einstain',
    avatar_url: `${HOST}${PORT}/assets/einstein.png`,
  },
  {
    alt: 'Punk Guy',
    avatar_url: `${HOST}${PORT}/assets/punk.png`,
  },
  {
    alt: 'Pilot Man',
    avatar_url: `${HOST}${PORT}/assets/pilot.png`,
  },
  {
    alt: 'Ozzy',
    avatar_url: `${HOST}${PORT}/assets/ozzy.png`,
  },
  {
    alt: 'Your Neighbor',
    avatar_url: `${HOST}${PORT}/assets/indian_male.png`,
  },
  {
    alt: 'Noun',
    avatar_url: `${HOST}${PORT}/assets/nun_sister.png`,
  },
  {
    alt: 'Marilyn Monroe',
    avatar_url: `${HOST}${PORT}/assets/marlin_monroe.png`,
  },
  {
    alt: 'Beared Hipster',
    avatar_url: `${HOST}${PORT}/assets/hipster.png`,
  },
  {
    alt: 'Halloween Jason',
    avatar_url: `${HOST}${PORT}/assets/halloween.png`,
  },
  {
    alt: 'Grandma',
    avatar_url: `${HOST}${PORT}/assets/grandma.png`,
  },
  {
    alt: 'Pencil',
    avatar_url: `${HOST}${PORT}/assets/pencil.png`,
  },
  {
    alt: 'Baby Kid',
    avatar_url: `${HOST}${PORT}/assets/baby_kid.png`,
  },

  {
    alt: 'Japan Girl',
    avatar_url: `${HOST}${PORT}/assets/geisha.png`,
  },
  {
    alt: 'Pencil',
    avatar_url: `${HOST}${PORT}/assets/pencil.png`,
  },
  {
    alt: 'The coffe cup',
    avatar_url: `${HOST}${PORT}/assets/coffee_zorro.png`,
  },
  {
    alt: 'Crying Cloud',
    avatar_url: `${HOST}${PORT}/assets/crying_cloud.png`,
  },
  {
    alt: 'Carle Chaplin',
    avatar_url: `${HOST}${PORT}/assets/chaplin.png`,
  },
  {
    alt: 'The Cactus',
    avatar_url: `${HOST}${PORT}/assets/cactus.png`,
  },
  {
    alt: 'Builder Man',
    avatar_url: `${HOST}${PORT}/assets/builder.png`,
  },
  {
    alt: 'The Haisenberg',
    avatar_url: `${HOST}${PORT}/assets/breaking_bad.png`,
  },
  {
    alt: 'Soviet Bear',
    avatar_url: `${HOST}${PORT}/assets/bear_russian.png`,
  },
  {
    alt: 'Batman',
    avatar_url: `${HOST}${PORT}/assets/batman.png`,
  },
  {
    alt: 'Sleeping kid',
    avatar_url: `${HOST}${PORT}/assets/baby_kid.png`,
  },
  {
    alt: 'The Avocado',
    avatar_url: `${HOST}${PORT}/assets/avocado.png`,
  },
  {
    alt: 'Apple Watch',
    avatar_url: `${HOST}${PORT}/assets/apple_watch.png`,
  },
  {
    alt: 'Anime',
    avatar_url: `${HOST}${PORT}/assets/anime.png`,
  },
  {
    alt: 'Afro Man',
    avatar_url: `${HOST}${PORT}/assets/afro_man.png`,
  },
];
