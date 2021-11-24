import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateHeroDto,
  HeroDto,
  HeroesPaginatedDto,
  HeroesPaginateOptionsDto,
  UpdateHeroDto,
  DeleteHeroDto,
} from './dtos';
import { HeroesService } from './heroes.service';

@Resolver(() => HeroDto)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Query(() => HeroesPaginatedDto)
  async heroes(
    @Args() heroesPaginateOptions: HeroesPaginateOptionsDto,
  ): Promise<HeroesPaginatedDto> {
    const whereOptions = {
      typeId: heroesPaginateOptions.typeId,
      fullName: {
        contains: heroesPaginateOptions.fullNameQuery,
      },
    };

    const [data, totalCount] = await Promise.all([
      this.heroesService.heroes({
        take: heroesPaginateOptions.first,
        skip: heroesPaginateOptions.skip,
        where: whereOptions,
      }),
      this.heroesService.count({
        where: whereOptions,
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
  createHero(@Args('input') input: CreateHeroDto): Promise<HeroDto> {
    const { avatarId, typeId, ...hero } = input;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: typeId } },
      avatar: { connect: { id: avatarId } },
    });
  }

  @Mutation(() => HeroDto)
  updateHero(@Args('input') input: UpdateHeroDto): Promise<HeroDto> {
    const { id, avatarId, typeId, ...hero } = input;
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
  deleteHero(@Args('input') input: DeleteHeroDto): Promise<HeroDto> {
    return this.heroesService.delete({ id: input.id });
  }
}
