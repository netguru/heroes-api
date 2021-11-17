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
import { ApiDefaultResponse, ApiExtraModels, ApiTags } from '@nestjs/swagger';
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
    return this.heroesService.getPaginated(query);
  }

  @Get(':id')
  @ApiDefaultResponse({ type: HeroDto })
  getOne(@Param('id') id: HeroDto['id']): Promise<HeroDto> {
    return this.heroesService.getOne(id);
  }

  @Post()
  @ApiDefaultResponse({ type: HeroDto })
  create(@Body() createHeroDto: CreateHeroDto): Promise<HeroDto> {
    return this.heroesService.create(createHeroDto);
  }

  @Put(':id')
  @ApiDefaultResponse({ type: HeroDto })
  update(
    @Param('id') id: HeroDto['id'],
    @Body() updateHeroDto: UpdateHeroDto,
  ): Promise<HeroDto> {
    return this.heroesService.update(id, updateHeroDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: HeroDto['id']) {
    await this.heroesService.delete(id);
  }

  @Get('/random')
  @ApiDefaultResponse({ type: HeroDto })
  getRandom(): Promise<HeroDto> {
    return this.heroesService.getRandom();
  }
}
