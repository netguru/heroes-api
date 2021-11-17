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
import { AvatarsService } from './avatars.service';
import { CreateAvatarDto, UpdateAvatarDto, AvatarDto } from './dtos';

@Controller('avatars')
@ApiTags('avatars')
export class AvatarsController {
  constructor(private avatarsService: AvatarsService) {}

  @Get()
  getAll(): Promise<AvatarDto[]> {
    return this.avatarsService.getAll();
  }

  @Post()
  async create(@Body() createAvatarDto: CreateAvatarDto): Promise<AvatarDto> {
    return this.avatarsService.create(createAvatarDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: AvatarDto['id'],
    @Body() updateAvatarDto: UpdateAvatarDto,
  ): Promise<AvatarDto> {
    return this.avatarsService.update(id, updateAvatarDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: AvatarDto['id']) {
    return this.avatarsService.delete(id);
  }
}
