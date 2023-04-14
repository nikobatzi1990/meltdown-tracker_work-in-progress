const express = require('express');
const knex = require('../database/knex');
const auth  = require('./firebase/firebase')
const { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut } = require("firebase/auth");
// console.log('🧿', auth);
// console.log('👽', createUserWithEmailAndPassword);

function setUpServer() {
  const app = express();

  app.use(express.json());

  app.get('/hello', (req, res) => {
    res.send('world 🌎');
  });

  app.post('/api/signup', async (req, res) => {
    const { username, email, password, timestamp } = req.body;
      // console.log('🙏', req.body);
    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      // console.log('💋', newUser);
      const uid = newUser.user.uid;
      // console.log('🤡', uid);
      await knex('users').insert({ 'username': username, "email": email, 'UID': uid, 'created_at': timestamp });
      res.status(200).send(uid);

    } catch (error) {
      res.status(400).send(error);
    }
  });

  return app;
}
module.exports = setUpServer;