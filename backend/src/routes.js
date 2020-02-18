const { Router } = require('express');

const RecordController = require("./controllers/RecordController");

const routes = Router();

routes.get('/records', RecordController.index);

module.exports = routes;