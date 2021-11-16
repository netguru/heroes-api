import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities';
import { CreateTagDto, UpdateTagDto } from './dtos';

@Injectable()
export class TypesService {
  constructor(@InjectRepository(Type) private repository: Repository<Type>) {}

  getAll() {
    return this.repository.find();
  }

  create(dto: CreateTagDto) {
    return this.repository.save(dto);
  }

  async update(id: number, dto: UpdateTagDto) {
    const tag = await this.repository.findOneOrFail({ id });
    return this.repository.save({ ...tag, ...dto });
  }

  async delete(id: number) {
    const result = await this.repository.delete({ id });
    return { success: result.affected > 0 };
  }
}
