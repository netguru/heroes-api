import { Module } from '@nestjs/common';
import { TypesModule } from '../types';
import { DatabaseModule } from '../database';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroesResolver } from './heroes.resolver';

@Module({
  imports: [DatabaseModule, TypesModule],
  providers: [HeroesService, HeroesResolver],
  controllers: [HeroesController],
})
export class HeroesModule {}
