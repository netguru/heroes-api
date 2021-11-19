import { Module } from '@nestjs/common';
import { TypesModule } from '../types';
import { DatabaseModule } from '../database';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [DatabaseModule, TypesModule],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
