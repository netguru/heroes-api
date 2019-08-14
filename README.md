# Frontend New Recruitment Task - API
Built with Prisma, MySQL, GraphQL/REST


## First steps

- run `npm i`
- start database using `docker-compose up `
- run `npm run generate`
- run `npm run deploy`
- run `npm run seed` - to fill database with mock data
- start app using `npm run dev:rest` - for rest vesrion of API or `npm run dev:graphql` for GraphQL version

## Running the app

- `docker-compose up`
- `npm run dev:rest` or `npm run dev:graphql`
- open `http://localhost:4000/` to see if app is working

## Deploy new schema (after modifying `datamodel.prisma`)

`npm run deploy`

## Deploy new schema (after modifying `*.graphql`)

`npm run generate`

## API DOCS

### Heroes

#### Get all heroes
```
GET /heroes
```
body example:
```json
{
	"first": 10,
	"skip": 5
}
```

#### Get one hero by id
```
GET /heroes/:id
```

#### Add new hero
```
POST /heroes
```
body example:
```json
{
	"avatar_url": "https://drive.google.com/open?id=1-RgG25oomcXwLnvNvJ9kNnRs-_5GEkWF",
	"full_name": "UFO",
	"type": "cjx4j34l200710701sa7ozzew"
}
```

#### Update hero by id
```
PUT /heroes/:id
```
body example:
```json
{
	"avatar_url": "https://drive.google.com/open?id=1-RgG25oomcXwLnvNvJ9kNnRs-_5GEkWF",
	"full_name": "UFO",
	"type": "cjx4j34l200710701sa7ozzew"
}
```

### Types

#### Get all types
```
GET /types
```

#### Add new type
```
POST /types
```
body example:
```json
{
  "name": "Animal",
  "description": "Animal type"
}
```

#### Update type by id
```
PUT /type/:id
```
body example:
```json
{
	"name": "Animal",
  "description": "Animal type"
}
```

### Avatars

#### Get all avatars
```
GET /avatars
```

#### Add new avatar
```
POST /avatars
```
body example:
```json
{
  "alt": "St. Claus",
  "avatar_url": "https://drive.google.com/open?id=1ZmwtQPqYSQUOrEmS8YP3C_7UrAHEA2Ag"
}
```

#### Update avatar by id
```
PUT /avatars/:id
```
body example:
```json
{
  "alt": "St. Claus",
  "avatar_url": "https://drive.google.com/open?id=1ZmwtQPqYSQUOrEmS8YP3C_7UrAHEA2Ag"
}
```