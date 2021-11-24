import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateHeroDto,
  HeroDto,
  HeroesPaginatedDto,
  HeroesPaginateOptionsDto,
  UpdateHeroDto,
} from './dtos';
import { HeroesService } from './heroes.service';

@Resolver(() => HeroDto)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Query(() => HeroesPaginatedDto)
  async heroes(
    @Args() heroesPaginateOptions: HeroesPaginateOptionsDto,
  ): Promise<HeroesPaginatedDto> {
    const [data, totalCount] = await Promise.all([
      this.heroesService.heroes({
        take: heroesPaginateOptions.first,
        skip: heroesPaginateOptions.skip,
        where: {
          typeId: heroesPaginateOptions.typeId,
          fullName: {
            contains: heroesPaginateOptions.fullName,
          },
        },
      }),
      this.heroesService.count({
        where: {
          typeId: heroesPaginateOptions.typeId,
          fullName: {
            contains: heroesPaginateOptions.fullName,
          },
        },
      }),
    ]);

    return { data, totalCount };
  }

  @Query(() => HeroDto)
  hero(@Args('id', { type: () => ID }) id: string): Promise<HeroDto> {
    return this.heroesService.hero({ where: { id } });
  }

  @Query(() => HeroDto)
  randomHero(): Promise<HeroDto> {
    return this.heroesService.random();
  }

  @Mutation(() => HeroDto)
  createHero(@Args() createHeroDto: CreateHeroDto): Promise<HeroDto> {
    const { avatarId, typeId, ...hero } = createHeroDto;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: typeId } },
      avatar: { connect: { id: avatarId } },
    });
  }

  @Mutation(() => HeroDto)
  updateHero(
    @Args() updateHeroDto: UpdateHeroDto,
    @Args('id', { type: () => ID }) id: string,
  ): Promise<HeroDto> {
    const { avatarId, typeId, ...hero } = updateHeroDto;
    return this.heroesService.update(
      { id },
      {
        ...hero,
        type: { connect: { id: typeId } },
        avatar: { connect: { id: avatarId } },
      },
    );
  }

  @Mutation(() => HeroDto)
  deleteHero(@Args('id', { type: () => ID }) id: string): Promise<HeroDto> {
    return this.heroesService.delete({ id });
  }
}
