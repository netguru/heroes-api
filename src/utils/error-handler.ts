import { IHero } from '../types/hero';

export const ErrorHandler = {
  CANT_FIND_QUERY: `Couldn't find the query element`,
  BAD_REQUEST: `Bad request`,
};

export const getMissingFields = ({
  avatar_url,
  full_name,
  type,
  description,
}: IHero) =>
  [
    !avatar_url && 'avatar_url',
    !full_name && 'full_name',
    !type && 'type',
    !description && 'description',
  ].filter(Boolean);

export const getMissingFieldsErrorText = (missingFields: string[]) =>
  `${missingFields.join(', ')} ${
    missingFields.length > 1 ? 'fields are' : 'field is'
  } required`;
