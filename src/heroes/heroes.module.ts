import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesModule } from '../types';
import { entities } from './entities';
import { DatabaseModule } from '../database';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [DatabaseModule, TypesModule, TypeOrmModule.forFeature(entities)],
  providers: [HeroesService],
  controllers: [HeroesController],
  exports: [TypeOrmModule],
})
export class HeroesModule {}
