import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  imports: [DatabaseModule],
  providers: [TypesService],
  controllers: [TypesController],
})
export class TypesModule {}
