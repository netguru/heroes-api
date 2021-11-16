import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { HeroesService } from './heroes.service';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature(entities)],
  providers: [HeroesService],
  exports: [TypeOrmModule],
})
export class HeroesModule {}
