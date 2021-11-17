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
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TypesService } from './types.service';
import { CreateTagDto, UpdateTagDto, TypeDto } from './dtos';
import { ApiArrayResponse } from '../decorators';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  @ApiArrayResponse(TypeDto)
  getAll(): Promise<TypeDto[]> {
    return this.typesService.getAll();
  }

  @Post()
  @ApiCreatedResponse({ type: TypeDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  create(@Body() createTagDto: CreateTagDto): Promise<TypeDto> {
    return this.typesService.create(createTagDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: TypeDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<TypeDto> {
    return this.typesService.update(id, updateTagDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse()
  @ApiNotFoundResponse()
  async delete(@Param('id') id: string) {
    await this.typesService.delete(id);
  }
}
