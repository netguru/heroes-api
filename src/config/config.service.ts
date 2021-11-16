import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

interface Config {
  DATABASE_HOST: string;
  DATABASE_PORT: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
}

@Injectable()
export class ConfigService {
  constructor(private config: NestConfigService<Config>) {}

  getDatabase() {
    return {
      host: this.config.get('DATABASE_HOST'),
      port: parseInt(this.config.get('DATABASE_PORT')),
      user: this.config.get('DATABASE_USER'),
      password: this.config.get('DATABASE_PASSWORD'),
      name: this.config.get('DATABASE_NAME'),
    };
  }
}
