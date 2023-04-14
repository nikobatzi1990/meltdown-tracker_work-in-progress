const express = require('express');
const knex = require('../database/knex');
const { auth } = require('./firebase/firebase')
const { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut } = require("firebase/auth");

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
      // console.log('🤡', uid);
      await knex('users').insert({'username': 'niko', "email": email, 'UID': '12737473748374' });

      res.status(200).send("Success");

    } catch (error) {
      res.status(400).send(error);
    }
  });

  return app;
}
module.exports = setUpServer;