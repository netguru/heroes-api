# Frontend New Recruitment Task - API
Built with Prisma, MySQL, GraphQL/REST


## First steps

- run `npm i`
- start database using `docker-compose up `
- run `npm run generate`
- run `npm run deploy`
- run `npm run seeds` - to fill database with mock data
- start app using `npm run dev:rest` - for rest vesrion of API or `npm run dev:graphql` for GraphQL version

## Running the app

- `docker-compose up`
- `npm run dev:rest` or `npm run dev:graphql`
- open `http://localhost:4000/` to see if app is working

## Deploy new schema (after modifying `datamodel.prisma`)

`npm run deploy`

## Deploy new schema (after modifying `*.graphql`)

`npm run generate`