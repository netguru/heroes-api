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
import { ApiTags } from '@nestjs/swagger';
import { Hero } from './entities';
import { HeroesService } from './heroes.service';
import {
  SearchOptionsDto,
  PaginatedResultDto,
  CreateHeroDto,
  UpdateHeroDto,
} from './dtos';

@Controller('heroes')
@ApiTags('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async getAll(
    @Query() query: SearchOptionsDto,
  ): Promise<PaginatedResultDto<Hero>> {
    return this.heroesService.getPaginated(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Hero> {
    return this.heroesService.getOne(id);
  }

  @Post()
  create(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return this.heroesService.create(createHeroDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateHeroDto: UpdateHeroDto,
  ): Promise<Hero> {
    return this.heroesService.update(id, updateHeroDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.heroesService.delete(id);
  }

  @Get('/random')
  getRandom(): Promise<Hero> {
    return this.heroesService.getRandom();
  }
}
