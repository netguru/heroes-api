import { ResolversMapType } from '../types/resolver';

// resolvers
import { jobMutation, jobQuery } from './Job';
import { Person, personMutation, personQuery } from './Person';

export const resolvers: ResolversMapType = {
  Mutation: {
    ...personMutation,
    ...jobMutation,
  },
  Query: {
    ...personQuery,
    ...jobQuery,
  },
  Person,
};
