import { ObjectType } from '@nestjs/graphql';
import { PaginatedDto } from '../../dtos';
import { HeroDto } from './hero.dto';

@ObjectType('HeroesPaginated')
export class HeroesPaginatedDto extends PaginatedDto(HeroDto) {}
