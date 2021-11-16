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
import { CreateAvatarDto, UpdateAvatarDto } from './dtos';
import { Avatar } from './entities';

@Controller('avatars')
@ApiTags('avatars')
export class AvatarsController {
  constructor(private avatarsService: AvatarsService) {}

  @Get()
  getAll(): Promise<Avatar[]> {
    return this.avatarsService.getAll();
  }

  @Post()
  async create(@Body() createAvatarDto: CreateAvatarDto): Promise<Avatar> {
    return this.avatarsService.create(createAvatarDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAvatarDto: UpdateAvatarDto,
  ): Promise<Avatar> {
    return this.avatarsService.update(id, updateAvatarDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.avatarsService.delete(id);
  }
}
