import * as bodyParser from 'body-parser-graphql';
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from '../generated/prisma-client';
import { resolvers } from './graphql/resolvers';

const server = new GraphQLServer({
  context: (req, res) => ({
    ...req,
    ...res,
    prisma,
  }),
  resolvers,
  typeDefs: './schema-compiled.graphql',
});

server.use(bodyParser.graphql());
server.start(() => console.log('Server is running on http://localhost:4000'));
