import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './entities';

@Injectable()
export class TypesService {
  constructor(@InjectRepository(Type) private repository: Repository<Type>) {}
}
