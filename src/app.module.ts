import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes';
import { ConfigModule } from './config';
import { DatabaseModule } from './database';
import { AvatarsModule } from './avatars';
import { TypesModule } from './types';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    HeroesModule,
    AvatarsModule,
    TypesModule,
  ],
})
export class AppModule {}
