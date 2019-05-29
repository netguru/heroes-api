import * as express from 'express';

import { AddNewUser, AllUsers } from './src/REST/controllers/User';

const app = express();

const PORT = 3200;

app.get('/', (req, res) => {
  res.send({
    message: 'ok',
  });
});

app.get('/addUser', AddNewUser);

app.get('/allUsers', AllUsers);

app.listen(PORT, () => `Server is listening on ${PORT}`);
