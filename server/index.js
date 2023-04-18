const setUpServer = require('./server');
const PORT = process.env.PORT || 8000;
const server = setUpServer();
const knex = require('../database/knex')

(async () => {
  try {
    await knex.migrate.latest();
    server.listen(PORT, () => {
      console.log(`app is listening @ http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(`app failed to start: ${err}`);
  }
})();