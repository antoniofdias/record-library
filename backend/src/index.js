import express from "express";
import cors from "cors";

import database from "./config/database";
import routes from "./routes";

const app = express();

database.connect();

const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`🚀  Listening on port ${port}.`);
});