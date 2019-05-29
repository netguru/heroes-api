import { ResolversMapType } from '../types/resolver';

// resolvers
import { Post, postMutation, postQuery } from './Post';
import { User, userMutation, userQuery } from './User';

export const resolvers: ResolversMapType = {
  Mutation: {
    ...userMutation,
    ...postMutation,
  },
  Query: {
    ...userQuery,
    ...postQuery,
  },
  User,
  Post,
};
