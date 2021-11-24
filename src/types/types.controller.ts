import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TypesService } from './types.service';
import { CreateTypeDto, UpdateTypeDto, TypeDto } from './dtos';
import { ApiArrayResponse } from '../decorators';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  @ApiArrayResponse(TypeDto)
  getAll(): Promise<TypeDto[]> {
    return this.typesService.types();
  }

  @Post()
  @ApiCreatedResponse({ type: TypeDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  create(@Body() createTagDto: CreateTypeDto): Promise<TypeDto> {
    return this.typesService.create(createTagDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTypeDto,
  ): Promise<TypeDto> {
    return this.typesService.update({ id }, updateTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiNotFoundResponse()
  async delete(@Param('id') id: string) {
    await this.typesService.delete({ id });
  }
}
