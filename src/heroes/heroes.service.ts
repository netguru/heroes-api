import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroesService {
  constructor(@InjectRepository(Hero) private repository: Repository<Hero>) {}
}
