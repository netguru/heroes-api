import * as express from 'express';
import * as bodyParser from 'body-parser';

import {
  getAllHeroes,
  getHeroById,
  createHero,
  deleteHero,
  updateHero,
} from './rest/controllers/Heroes';

const app = express();

const PORT = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Server is running',
  });
});

app.get('/heroes', getAllHeroes);
app.get('/heroes/:id', getHeroById);
app.post('/heroes', createHero);
app.delete('/heroes/:id', deleteHero);
app.put('/heroes/:id', updateHero);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
