import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigService, NestConfigModule.forRoot({ isGlobal: true })],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
