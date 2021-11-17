import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypesService } from '../types';
import { PaginatedDto, PaginateOptionsDto } from '../dtos';
import { CreateHeroDto, UpdateHeroDto, HeroDto } from './dtos';
import { Hero } from './entities';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero) private heroRepository: Repository<Hero>,
    private typesService: TypesService,
  ) {}

  get(options: PaginateOptionsDto): Promise<HeroDto[]> {
    return this.heroRepository.find({
      skip: options.skip,
      take: options.first,
      relations: ['type'],
    });
  }

  async getOne(id: HeroDto['id']): Promise<HeroDto> {
    const hero = await this.heroRepository.findOne(
      { id },
      { relations: ['type'] },
    );
    if (!hero) {
      throw new HttpException('Hero not found', HttpStatus.NOT_FOUND);
    }
    return hero;
  }

  count(): Promise<number> {
    return this.heroRepository.count();
  }

  async getPaginated(
    options: PaginateOptionsDto,
  ): Promise<PaginatedDto<HeroDto>> {
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

  async update(id: HeroDto['id'], dto: UpdateHeroDto) {
    const hero = await this.getOne(id);
    const type = dto.type
      ? await this.typesService.getOne(dto.type)
      : hero.type;
    return this.heroRepository.save({ ...hero, ...dto, type });
  }

  async delete(id: HeroDto['id']) {
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
