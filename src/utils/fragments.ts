export const heroesWithTypes = `
fragment HeroesWithTypes on Hero {
  id
  avatar_url
  full_name
  description
  type {
    id
    name
  }
}
`;
