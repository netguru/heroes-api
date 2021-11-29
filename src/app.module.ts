import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HeroesModule } from './heroes';
import { DatabaseModule } from './database';
import { TypesModule } from './types';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    DatabaseModule,
    HeroesModule,
    TypesModule,
  ],
})
export class AppModule {}
