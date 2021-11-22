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
import { AvatarsService } from './avatars.service';
import { CreateAvatarDto, UpdateAvatarDto, AvatarDto } from './dtos';
import { ApiArrayResponse } from '../decorators';

@Controller('avatars')
@ApiTags('avatars')
export class AvatarsController {
  constructor(private avatarsService: AvatarsService) {}

  @Get()
  @ApiArrayResponse(AvatarDto)
  getAll(): Promise<AvatarDto[]> {
    return this.avatarsService.avatars();
  }

  @Post()
  @ApiCreatedResponse({ type: AvatarDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  create(@Body() createAvatarDto: CreateAvatarDto): Promise<AvatarDto> {
    return this.avatarsService.create(createAvatarDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: AvatarDto })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  update(
    @Param('id') id: string,
    @Body() updateAvatarDto: UpdateAvatarDto,
  ): Promise<AvatarDto> {
    return this.avatarsService.update({ id }, updateAvatarDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AvatarDto })
  @ApiNotFoundResponse()
  async delete(@Param('id') id: string) {
    await this.avatarsService.delete({ id });
  }
}
