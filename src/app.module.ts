import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HeroesModule } from './heroes';
import { DatabaseModule } from './database';
import { AvatarsModule } from './avatars';
import { TypesModule } from './types';

@Module({
  imports: [
    DatabaseModule,
    HeroesModule,
    AvatarsModule,
    TypesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
