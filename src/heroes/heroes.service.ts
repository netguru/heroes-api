import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypesService } from '../types';
import { Hero } from './entities';
import {
  SearchOptionsDto,
  PaginatedResultDto,
  CreateHeroDto,
  UpdateHeroDto,
} from './dtos';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero) private heroRepository: Repository<Hero>,
    private typesService: TypesService,
  ) {}

  get(options: SearchOptionsDto): Promise<Hero[]> {
    return this.heroRepository.find({
      skip: options.skip,
      take: options.first,
      relations: ['type'],
    });
  }

  getOne(id: number): Promise<Hero> {
    return this.heroRepository.findOneOrFail({ id }, { relations: ['type'] });
  }

  count(): Promise<number> {
    return this.heroRepository.count();
  }

  async getPaginated(
    options: SearchOptionsDto,
  ): Promise<PaginatedResultDto<Hero>> {
    const [data, totalCount] = await Promise.all([
      this.get(options),
      this.count(),
    ]);

    return { data, totalCount };
  }

  async create(dto: CreateHeroDto) {
    const type = await this.typesService.getOne(dto.type);
    return this.heroRepository.save({ ...dto, type });
  }

  async update(id: number, dto: UpdateHeroDto) {
    const hero = await this.getOne(id);
    const type = dto.type
      ? await this.typesService.getOne(dto.type)
      : hero.type;
    return this.heroRepository.save({ ...hero, ...dto, type });
  }

  async delete(id: number) {
    const result = await this.heroRepository.delete({ id });
    return { success: result.affected > 0 };
  }

  async getRandom() {
    const count = await this.count();
    const skip = Math.floor(Math.random() * count);
    const [hero] = await this.get({ skip, first: 1 });
    return hero;
  }
}
