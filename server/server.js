const express = require('express');
const knex = require('../database/knex');
const auth  = require('./firebase/firebase')
const { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut } = require("firebase/auth");

function setUpServer() {
  const app = express();

  app.use(express.json());

// signup endpoint
  app.post('/api/signup', async (req, res) => {
    const { username, email, password, timestamp } = req.body;

    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      const uid = newUser.user.uid;
      await knex('users').insert({ 'username': username, "email": email, 'UID': uid, 'created_at': timestamp });
      res.status(200).send(auth);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
// login endpoint
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      res.status(200).send(auth);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // logout endpoint
  app.post('/api/logout', async (req, res) => {
    await signOut(auth)
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send(error))
  });
  
  // endpoints for user created tags
  app.get('/api/tags', async (req, res) => {
    await knex.select('*').from('tags')
      .join('users', 'users.id', '=', 'tags.user_id')
    
    .then(result => {
      console.log("😇", result)
      res.status(200).send(result)})
    .catch(error => res.status(400).send(error))
  });

  app.post('/api/tags', async (req, res) => {
    const { userId, tagName, timesUsed } = req.body;
    
    try {
      await knex('tags')
      .insert({ 'user_id': userId, 'tag_name': tagName, 'times_used': timesUsed });
      console.log('🥲', tagName);
      res.status(200).send(tagName);
    } catch (error) {
        res.status(400).send(error);
    }
  })
                   

  return app;
}
module.exports = setUpServer;