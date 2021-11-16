import { ConfigService as NestConfigService } from '@nestjs/config';

interface Config {
  databaseHost: string;
}

export class ConfigService {
  constructor(private config: NestConfigService<Config>) {}

  get database() {
    return {
      host: this.config.get('databaseHost'),
    };
  }
}
