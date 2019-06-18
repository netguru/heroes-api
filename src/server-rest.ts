import * as express from "express";

import {
  addNewPerson,
  getAllPersons,
  getSinglePerson
} from "./rest/controllers/Person";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send({
    message: "Server is running"
  });
});

app.post("/people/add", addNewPerson);

app.get("/people", getAllPersons);

app.get("/people/:id", getSinglePerson);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
