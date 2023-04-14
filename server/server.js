const express = require('express');
const path = require('path');
const database = require('../database/knex');
// const { handleSignUp, handleLogin, handleLogout } = require("./firebase/auth"); 

function setUpServer() {
  const app = express();

  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world 🌎');
  });

  app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log('💋', email, password)
    try {
      // const newUser = await handleSignUp(email, password);
      // const uid = newUser.uid;


      console.log('🤡', uid);
      await database('users').insert({'username': 'niko', "email": email, 'UID': '12737473748374' });

      res.status(200).send(uid);

    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await handleLogin(email, password);
      const uid = user.user.uid;
      console.log('🎃', uid);
      res.status(200).send(uid);

    } catch (error) {
      res.status(401).send("Boo you fail", error);
    }
  });
  
  return app;
}
module.exports = setUpServer;