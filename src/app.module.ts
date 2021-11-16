import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes';
import { ConfigModule } from './config';
import { DatabaseModule } from './database';

@Module({
  imports: [ConfigModule, DatabaseModule, HeroesModule],
})
export class AppModule {}
