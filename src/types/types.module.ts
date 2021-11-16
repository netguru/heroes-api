import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database';
import { entities } from './entities';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature(entities)],
  providers: [TypesService],
  controllers: [TypesController],
  exports: [TypeOrmModule],
})
export class TypesModule {}
