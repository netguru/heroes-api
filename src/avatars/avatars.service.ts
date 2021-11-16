import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avatar } from './entities';
import { CreateAvatarDto, UpdateAvatarDto } from './dtos';

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

  async update(id: number, dto: UpdateAvatarDto) {
    const avatar = await this.repository.findOneOrFail({ id });
    return this.repository.save({ ...avatar, ...dto });
  }

  async delete(id: number) {
    const result = await this.repository.delete({ id });
    return { success: result.affected > 0 };
  }
}
