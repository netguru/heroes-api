import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { AvatarsService } from './avatars.service';
import { AvatarsController } from './avatars.controller';
import { AvatarsResolver } from './avatars.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [AvatarsService, AvatarsResolver],
  controllers: [AvatarsController],
})
export class AvatarsModule {}
