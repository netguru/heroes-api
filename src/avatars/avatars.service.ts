import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avatar } from './entities';
import { AvatarDto, CreateAvatarDto, UpdateAvatarDto } from './dtos';

@Injectable()
export class AvatarsService {
  constructor(
    @InjectRepository(Avatar) private repository: Repository<Avatar>,
  ) {}

  getAll() {
    return this.repository.find();
  }

  create(dto: CreateAvatarDto) {
    return this.repository.save(dto);
  }

  async getOne(id: AvatarDto['id']) {
    const avatar = await this.repository.findOne({ id });
    if (!avatar) {
      throw new HttpException('Avatar not found', HttpStatus.NOT_FOUND);
    }
    return avatar;
  }

  async update(id: AvatarDto['id'], dto: UpdateAvatarDto) {
    const avatar = await this.getOne(id);
    return this.repository.save({ ...avatar, ...dto });
  }

  async delete(id: AvatarDto['id']) {
    const result = await this.repository.delete({ id });
    if (result.affected === 0) {
      throw new HttpException('Avatar not found', HttpStatus.NOT_FOUND);
    }
    return true;
  }
}
