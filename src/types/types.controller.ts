import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypesService } from './types.service';
import { Type } from './entities';
import { CreateTagDto, UpdateTagDto } from './dtos';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  getAll(): Promise<Type[]> {
    return this.typesService.getAll();
  }

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.typesService.create(createTagDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTagDto: UpdateTagDto) {
    return this.typesService.update(id, updateTagDto);
  }
}
