import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { HeroesService } from './heroes';
import * as request from 'supertest';

describe('Heroes', () => {
  const heroesService = { heroes: () => ['test'] };
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HeroesService],
    })
      .overrideProvider(HeroesService)
      .useValue(heroesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer()).get('/heroes').expect(200).expect({
      data: heroesService.heroes(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
