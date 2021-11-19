import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { AvatarsService } from './avatars.service';
import { AvatarsController } from './avatars.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AvatarsService],
  controllers: [AvatarsController],
})
export class AvatarsModule {}
