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
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../decorators';
import { PaginatedDto, PaginateOptionsDto } from '../dtos';
import { HeroesService } from './heroes.service';
import { CreateHeroDto, UpdateHeroDto, HeroDto } from './dtos';

@Controller('heroes')
@ApiTags('heroes')
@ApiExtraModels(PaginatedDto)
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  @ApiPaginatedResponse(HeroDto)
  async getAll(
    @Query() query: PaginateOptionsDto,
  ): Promise<PaginatedDto<HeroDto>> {
    const [data, totalCount] = await Promise.all([
      this.heroesService.heroes({
        take: query.first,
        skip: query.skip,
        distinct: ['typeId'],
      }),
      this.heroesService.count(),
    ]);

    return { totalCount, data };
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
    const { type, ...hero } = createHeroDto;
    return this.heroesService.create({
      ...hero,
      type: { connect: { id: type } },
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
    const { type, ...hero } = updateHeroDto;
    return this.heroesService.update(
      { id },
      { ...hero, type: { connect: { id: type } } },
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse()
  @ApiNotFoundResponse()
  async delete(@Param('id') id: string) {
    await this.heroesService.delete({ id });
  }
}
