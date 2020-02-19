const express = require('express');
const cors = require('cors');

const app = express();

const database = require("./config/database");
const routes = require("./routes");

database.connect();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`🚀  Listening on port ${port}.`);
});