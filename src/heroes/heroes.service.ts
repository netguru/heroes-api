import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypesService } from '../types';
import { PaginatedDto, PaginateOptionsDto } from '../dtos';
import { Hero } from './entities';
import { CreateHeroDto, UpdateHeroDto } from './dtos';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero) private heroRepository: Repository<Hero>,
    private typesService: TypesService,
  ) {}

  get(options: PaginateOptionsDto): Promise<Hero[]> {
    return this.heroRepository.find({
      skip: options.skip,
      take: options.first,
      relations: ['type'],
    });
  }

  getOne(id: Hero['id']): Promise<Hero | undefined> {
    return this.heroRepository.findOne({ id }, { relations: ['type'] });
  }

  count(): Promise<number> {
    return this.heroRepository.count();
  }

  async getPaginated(options: PaginateOptionsDto): Promise<PaginatedDto<Hero>> {
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

  async update(id: Hero['id'], dto: UpdateHeroDto) {
    const hero = await this.getOne(id);
    if (!hero) {
      throw new HttpException('Hero not found', HttpStatus.NOT_FOUND);
    }

    const type = dto.type
      ? await this.typesService.getOne(dto.type)
      : hero.type;
    return this.heroRepository.save({ ...hero, ...dto, type });
  }

  async delete(id: Hero['id']) {
    const result = await this.heroRepository.delete({ id });
    if (result.affected === 0) {
      throw new HttpException('Hero not found', HttpStatus.NOT_FOUND);
    }
    return true;
  }

  async getRandom() {
    const count = await this.count();
    const skip = Math.floor(Math.random() * count);
    const [hero] = await this.get({ skip, first: 1 });
    return hero;
  }
}
