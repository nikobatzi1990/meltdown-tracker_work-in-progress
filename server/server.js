const express = require('express');
const database = require('../database/knex');

function setUpServer() {
  const app = express();

  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world 🌎');
  });
  return app;
}
module.exports = setUpServer;