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
  
  // endpoint for getting user created tags
  app.get('/api/:user/tags', async (req, res) => {
    const tagList = [];
    await knex.select('tag_name').from('tags')
      .where('user_id', req.params.user)
      .join('users', 'users.id', '=', 'tags.user_id')
    .then(result => {
      result.map((e) => {
        tagList.push(e.tag_name);
      })
      res.status(200).send(tagList)})
    .catch(error => res.status(400).send(error))
  });

  // endpoint for getting the number of times a tag has been used
  app.get('/api/:tagName/timesUsed', async (req, res) => {
    let timesUsed;
    await knex.select('times_used').from('tags')
      .where('tag_name', req.params.tagName)
      .join('users', 'users.id', '=', 'tags.user_id')

    .then(result => {
      result.map((e) => {
        timesUsed = e.times_used.toString();
      });
      res.status(200).send(timesUsed)
    })
    .catch(error => res.status(400).send(error))
  });

  // endpoint for posting a new tag
  app.post('/api/tags', async (req, res) => {
    const { userId, tagName } = req.body;
    try {
      const newTag = await knex('tags')
        .insert({ 
          'user_id': userId, 
          'tag_name': tagName, 
          'times_used': 0 
        });
      res.status(200).send(newTag);
    } catch (error) {
        res.status(400).send(error);
    }
  });

  // endpoint for a new entry submission
  app.post('/api/submission', async (req, res) => {
    const { userId, tagName, timesUsed, title, body, timeOfDay, flagged } = req.body;
      
      try {
      const tagQuery = await knex('tags')
        .returning('id')
        .update({
          'times_used': timesUsed
        })
        .where('tag_name', '=', tagName);

      const postQuery = await knex('posts')
        .returning('id')
        .insert({ 
          'title': title, 
          'body': body,
          'user_id': userId,
          'time_of_day': timeOfDay,
          'created_at': new Date(),
          'flagged': flagged
        });

      await knex('tag_to_post')
        .insert({
          'tag_id': tagQuery[0].id,
          'post_id': postQuery[0].id
        });

      res.status(200).send(postQuery)
      
    } catch (error) {
        res.status(400).send(error);
    }
  });

  // endpoint for all of one user's entries
  app.get('/api/:userId/entries', async (req, res) => {
    try {
      await knex.select('title', 'body').from('posts')
        .where('user_id', req.params.userId)
        .join('users', 'users.id', '=', 'posts.user_id')
      .then(result => {
        res.status(200).send(result);
      });
      
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for all entries that include specified tag
  app.get('/api/entries/:tagId', async (req, res) => {
    try {
      const result = await knex.select('title', 'body').from('posts')
      .join('tag_to_post', 'tag_to_post.post_id', '=','posts.id')
      .join('tags', 'tag_to_post.tag_id', '=', 'tags.id')
      .where('tag_to_post.tag_id', '=', req.params.tagId);
      res.status(200).send(result);

    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for getting one entry by id
  app.get('/api/:entryId/entry', async (req,res) => {
    try {
      const entry = await knex.select('title', 'body').from('posts')
        .where('posts.id', '=', req.params.entryId);
        res.status(200).send(entry[0])

    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for editing an entry by id
  app.patch('/api/:entryId/entry', async (req, res) => {
    const { title, body, timeOfDay, flagged } = req.body;

    try {
      const edit = await knex('posts')
        .where('posts.id', '=', req.params.entryId)
        .update({
        'title': title, 
        'body': body,
        'time_of_day': timeOfDay,
        'flagged': flagged
      });
      res.status(200).send(edit)

    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for deleting an entry
  app.delete('/api/:entryId/entry', async (req, res) => {
    try {
      await knex('posts')
        .delete()
        .where('posts.id', req.params.entryId);
      res.status(200).send("Post deleted")

    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  return app;
}
module.exports = setUpServer;