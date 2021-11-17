import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities';
import { CreateTagDto, TypeDto, UpdateTagDto } from './dtos';

@Injectable()
export class TypesService {
  constructor(@InjectRepository(Type) private repository: Repository<Type>) {}

  getAll() {
    return this.repository.find();
  }

  create(dto: CreateTagDto) {
    return this.repository.save(dto);
  }

  getOne(id: TypeDto['id']): Promise<TypeDto> {
    return this.repository.findOneOrFail({ id });
  }

  async update(id: TypeDto['id'], dto: UpdateTagDto) {
    const tag = await this.getOne(id);
    return this.repository.save({ ...tag, ...dto });
  }

  async delete(id: TypeDto['id']) {
    const result = await this.repository.delete({ id });
    return { success: result.affected > 0 };
  }
}
