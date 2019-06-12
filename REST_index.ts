import * as express from 'express';

import { addNewPerson, getAllPersons } from './src/REST/controllers/Person';

const app = express();

const PORT = 3200;

app.get('/', (req, res) => {
  res.send({
    message: 'Server is running',
  });
});

app.get('/person/add', addNewPerson);

app.get('/person/all', getAllPersons);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`),
);
