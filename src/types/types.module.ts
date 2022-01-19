import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { TypesResolver } from './types.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [TypesService, TypesResolver],
  controllers: [TypesController],
})
export class TypesModule {}
