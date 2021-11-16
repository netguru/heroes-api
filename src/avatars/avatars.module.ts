import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database';
import { entities } from './entities';
import { AvatarsService } from './avatars.service';
import { AvatarsController } from './avatars.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature(entities)],
  providers: [AvatarsService],
  controllers: [AvatarsController],
  exports: [TypeOrmModule],
})
export class AvatarsModule {}
