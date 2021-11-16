import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [HeroesModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
