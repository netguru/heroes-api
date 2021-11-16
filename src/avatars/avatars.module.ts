import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { AvatarsService } from './avatars.service';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature(entities)],
  providers: [AvatarsService],
  exports: [TypeOrmModule],
})
export class AvatarsModule {}
