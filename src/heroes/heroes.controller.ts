import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../decorators';
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
  constructor(private heroesService: HeroesService) {}

  @Get()
  @ApiPaginatedResponse(HeroDto)
  async getAll(
    @Query() query: HeroesPaginateOptionsDto,
  ): Promise<HeroesPaginatedDto> {
    const [data, total_count] = await Promise.all([
      this.heroesService.heroes({
        take: query.first,
        skip: query.skip,
        where: {
          typeId: query.type_id,
          full_name: {
            contains: query.name_query,
          },
        },
      }),
      this.heroesService.count({
        where: {
          typeId: query.type_id,
          full_name: {
            contains: query.name_query,
          },
        },
      }),
    ]);

    return { data, total_count };
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
    const { type_id, ...hero } = createHeroDto;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: type_id } },
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
    const { type_id, ...hero } = updateHeroDto;
    return this.heroesService.update(
      { id },
      { ...hero, type: { connect: { id: type_id } } },
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: HeroDto })
  @ApiNotFoundResponse()
  delete(@Param('id') id: string) {
    return this.heroesService.delete({ id });
  }
}
