import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { TypesService } from './types.service';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature(entities)],
  providers: [TypesService],
  exports: [TypeOrmModule],
})
export class TypesModule {}
