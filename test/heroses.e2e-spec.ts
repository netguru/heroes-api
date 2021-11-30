import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { HeroesRepository, HeroesService } from '../src/heroes';
import { heroesMock, heroMock } from './mocks/hero.mock';

describe('Heroes (e2e)', () => {
  const heroesService: Partial<HeroesRepository> = {
    count: async () => heroesMock.length,
    heroes: async () => heroesMock,
    hero: async () => heroMock,
    delete: async () => heroMock,
    create: async () => heroMock,
    update: async () => heroMock,
    random: async () => heroMock,
  };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(HeroesService)
      .useValue(heroesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/heroes (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/heroes');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      data: await heroesService.heroes(),
      totalCount: await heroesService.count(),
    });
  });

  it('/heroes/:id (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/heroes/1234');

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(await heroesService.hero());
  });

  it('/heroes (POST)', async () => {
    const hero = {
      fullName: heroMock.fullName,
      avatarUrl: heroMock.avatarUrl,
      description: heroMock.description,
      typeId: heroMock.type.id,
    };
    const response = await request(app.getHttpServer())
      .post('/heroes')
      .send(hero);

    expect(response.statusCode).toBe(201);
    expect(response.body).toStrictEqual(heroMock);
  });

  afterAll(async () => {
    await app.close();
  });
});
