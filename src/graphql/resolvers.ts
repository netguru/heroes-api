import { ResolversMapType } from '../types/resolver';

// resolvers
import { avatarMutation, avatarQuery } from './Avatar';
import { Hero, heroMutation, heroQuery } from './Hero';
import { typeMutation, typeQuery } from './Type';

export const resolvers: ResolversMapType = {
  Mutation: {
    ...heroMutation,
    ...typeMutation,
    ...avatarMutation,
  },
  Query: {
    ...heroQuery,
    ...typeQuery,
    ...avatarQuery,
  },
  Hero,
};
