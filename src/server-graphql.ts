import { graphql } from 'body-parser-graphql';
import { GraphQLServer } from 'graphql-yoga';
import { Request, Response } from 'express';
import { prisma } from '../generated/prisma-client';
import { resolvers } from './graphql/resolvers';

const server = new GraphQLServer({
  context: (req: Request, res: Response) => ({
    ...req,
    ...res,
    prisma,
  }),
  resolvers,
  typeDefs: './schema-compiled.graphql',
});

server.use(graphql());
server.start(() => console.log('Server is running on http://localhost:4000'));
