import { Response } from 'express';
import { Request } from 'graphql-tools';

import { Prisma } from '../../generated/prisma-client';

export type Context = {
  prisma: Prisma;
  request: Request;
  response: Response;
};
