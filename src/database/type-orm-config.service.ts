import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const config = this.config.getDatabase();
    return {
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.user,
      password: config.password,
      database: config.name,
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
