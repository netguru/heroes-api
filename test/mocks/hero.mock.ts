import { HeroDto } from '../../src/heroes/dtos';
import { datatype, image, lorem } from 'faker';

export const createHeroMock = (): HeroDto => ({
  id: datatype.uuid(),
  avatarUrl: image.avatar(),
  description: lorem.sentence(),
  type: { id: datatype.uuid(), name: lorem.sentence() },
  fullName: lorem.sentence(1),
});

export const heroMock = createHeroMock();

export const heroesMock = Array(10)
  .fill('')
  .map(() => createHeroMock());
