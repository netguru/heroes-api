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
    const [data, total_count] = await Promise.all([
      this.heroesService.heroes({
        take: heroesPaginateOptions.first,
        skip: heroesPaginateOptions.skip,
        where: {
          typeId: heroesPaginateOptions.type_id,
          full_name: {
            contains: heroesPaginateOptions.name_query,
          },
        },
      }),
      this.heroesService.count({
        where: {
          typeId: heroesPaginateOptions.type_id,
          full_name: {
            contains: heroesPaginateOptions.name_query,
          },
        },
      }),
    ]);

    return { data, total_count };
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
  createNewHero(@Args() createHeroDto: CreateHeroDto): Promise<HeroDto> {
    const { type_id, ...hero } = createHeroDto;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: type_id } },
    });
  }

  @Mutation(() => HeroDto)
  updateHero(
    @Args() updateHeroDto: UpdateHeroDto,
    @Args('id', { type: () => ID }) id: string,
  ): Promise<HeroDto> {
    const { type_id, ...hero } = updateHeroDto;
    return this.heroesService.update(
      { id },
      { ...hero, type: { connect: { id: type_id } } },
    );
  }

  @Mutation(() => HeroDto)
  deleteHero(@Args('id', { type: () => ID }) id: string): Promise<HeroDto> {
    return this.heroesService.delete({ id });
  }
}
