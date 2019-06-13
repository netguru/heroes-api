import * as express from 'express';

import {
  addNewPerson,
  getAllPersons,
  getSinglePerson,
} from './src/REST/controllers/Person';

const app = express();

const PORT = 3200;

app.get('/', (req, res) => {
  res.send({
    message: 'Server is running',
  });
});

app.post('/person/add', addNewPerson);

app.get('/person', getAllPersons);

app.get('/person/:id', getSinglePerson);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`),
);
