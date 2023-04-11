const setUpServer = require('./server');
const PORT = 4000;
const server = setUpServer();

(async () => {
  try {
    server.listen(PORT, () => {
      console.log(`app is listening @ http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(`app failed to start: ${err}`);
  }
})();