const setUpServer = require('./server');
const PORT = process.env.PORT || 8000;
const server = setUpServer();

(async () => {
  try {
    await database.migrate.latest();
    server.listen(PORT, () => {
      console.log(`app is listening @ http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(`app failed to start: ${err}`);
  }
})();