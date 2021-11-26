import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../common';
import { HeroesService } from './heroes.service';
import {
  CreateHeroDto,
  UpdateHeroDto,
  HeroDto,
  HeroesPaginatedDto,
  HeroesPaginateOptionsDto,
} from './dtos';

@Controller('heroes')
@ApiTags('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  @ApiPaginatedResponse(HeroDto)
  async getAll(
    @Query() query: HeroesPaginateOptionsDto,
  ): Promise<HeroesPaginatedDto> {
    const whereOptions = {
      typeId: query.typeId,
      fullName: {
        contains: query.fullNameQuery,
      },
    };

    const [data, totalCount] = await Promise.all([
      this.heroesService.heroes({
        take: query.first,
        skip: query.skip,
        where: whereOptions,
      }),
      this.heroesService.count({
        where: whereOptions,
      }),
    ]);

    return { data, totalCount };
  }

  @Get('/random')
  @ApiOkResponse({ type: HeroDto })
  getRandom(): Promise<HeroDto> {
    return this.heroesService.random();
  }

  @Get(':id')
  @ApiNotFoundResponse()
  @ApiOkResponse({ type: HeroDto })
  getOne(@Param('id') id: string): Promise<HeroDto> {
    return this.heroesService.hero({ where: { id } });
  }

  @Post()
  @ApiOkResponse({ type: HeroDto })
  @ApiBadRequestResponse()
  create(@Body() createHeroDto: CreateHeroDto): Promise<HeroDto> {
    const { typeId, ...hero } = createHeroDto;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: typeId } },
    });
  }

  @Put(':id')
  @ApiOkResponse({ type: HeroDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  update(
    @Param('id') id: string,
    @Body() updateHeroDto: UpdateHeroDto,
  ): Promise<HeroDto> {
    const { typeId, ...hero } = updateHeroDto;
    return this.heroesService.update(
      { id },
      {
        ...hero,
        type: { connect: { id: typeId } },
      },
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: HeroDto })
  @ApiNotFoundResponse()
  delete(@Param('id') id: string) {
    return this.heroesService.delete({ id });
  }
}
