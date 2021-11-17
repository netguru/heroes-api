import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypesService } from './types.service';
import { CreateTagDto, UpdateTagDto, TypeDto } from './dtos';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  getAll(): Promise<TypeDto[]> {
    return this.typesService.getAll();
  }

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.typesService.create(createTagDto);
  }

  @Put(':id')
  update(@Param('id') id: TypeDto['id'], @Body() updateTagDto: UpdateTagDto) {
    return this.typesService.update(id, updateTagDto);
  }

  @Delete(':id')
  delete(@Param('id') id: TypeDto['id']) {
    return this.typesService.delete(id);
  }
}
