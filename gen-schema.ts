import { importSchema } from 'graphql-import';

import { writeFileSync } from 'fs';

const newSchema = importSchema('./schema.graphql');

writeFileSync('./schema-compiled.graphql', newSchema);
