import { graphql } from 'body-parser-graphql';
import { GraphQLServer } from 'graphql-yoga';
import express, { Request, Response } from 'express';
import { config } from 'dotenv';

import { prisma } from '../generated/prisma-client';
import { resolvers } from './graphql/resolvers';

config();

const { HOST, PORT_GQL } = process.env;

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
server.use('/assets', express.static('assets'));
server.start(() => console.log(`Server is running on ${HOST}${PORT_GQL}`));
