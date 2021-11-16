import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
