import { ResolversMapType } from '../types/resolver';

// resolvers
import { avatarQuery } from './Avatar';
import { Hero, heroMutation, heroQuery } from './Hero';
import { typeMutation, typeQuery } from './Type';

export const resolvers: ResolversMapType = {
  Mutation: {
    ...heroMutation,
    ...typeMutation,
  },
  Query: {
    ...heroQuery,
    ...typeQuery,
    ...avatarQuery,
  },
  Hero,
};
