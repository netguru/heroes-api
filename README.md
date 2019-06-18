# Frontend New Recruitment Task - API
Built with Prisma, MySQL, GraphQL/REST


## First steps

- modify `.env` file to choose API version (graphql or rest)
- run `npm i`
- start the app using `docker-compose up -d`
- run `docker-compose exec application npm run deploy` - rerun it everytime you change Prisma schema

## Running the app

- run `docker-compose up -d`
- open `http://localhost:4000/` to see if app is working

## Deploy new schema (after modifying `datamodel.prisma`)

`docker-compose exec application npm run deploy`
