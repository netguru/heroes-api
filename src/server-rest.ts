import * as express from 'express';
import * as bodyParser from 'body-parser';

import {
  getAllHeroes,
  getHeroById,
  createHero,
  deleteHero,
  updateHero,
} from './rest/controllers/Heroes';

import {
  getAllTypes,
  createType,
  deleteType,
  updateType,
} from './rest/controllers/Types';

import {
  getAllAvatars,
  createAvatar,
  deleteAvatar,
  updateAvatar,
} from './rest/controllers/Avatars';

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

app.get('/types', getAllTypes);
app.post('/types', createType);
app.delete('/types/:id', deleteType);
app.put('/types/:id', updateType);

app.get('/avatars', getAllAvatars);
app.post('/avatars', createAvatar);
app.delete('/avatars/:id', deleteAvatar);
app.put('/avatars/:id', updateAvatar);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
