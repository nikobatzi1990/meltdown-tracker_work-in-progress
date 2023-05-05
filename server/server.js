const express = require('express');
const knex = require('../database/knex');
const path = require('path');

function setUpServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use(express.json());

  // signup endpoint
  app.post('/api/signup', async (req, res) => {
    const { username, email, uid } = req.body;
    try {
      await knex('users').insert({ 'username': username, "email": email, 'UID': uid, 'created_at': new Date() });
      res.status(200).send("New User Created");
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // endpoint for getting user created tags
  app.get('/api/:uid/tags', async (req, res) => {
    const tagList = [];
    await knex.select('tag_name').from('tags')
      .where('users.UID', req.params.uid)
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
    const { tagName, uid } = req.body;
    try {
      const userId = await knex.select('id')
        .from('users')
        .where('users.UID', uid);

      const newTag = await knex('tags')
        .insert({ 
          'user_id': userId[0].id, 
          'tag_name': tagName, 
          'times_used': 0 
        });
      res.status(200).send(newTag);
    } catch (error) {
        res.status(400).send(error);
    }
  });

  // endpoint for posting a new entry submission
  app.post('/api/submission', async (req, res) => {
    const { uid, tagName, timesUsed, title, body, timeOfDay, flagged } = req.body;
      const userId = await knex.select('id')
        .from('users')
        .where('UID', '=', uid);
      
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
          'user_id': userId[0].id,
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
  app.get('/api/:uid/entries', async (req, res) => {
    
    try {
      await knex.select('posts.id', 'title', 'body')
        .from('posts')
        .where('users.UID', req.params.uid)
        .join('users', 'users.id', '=', 'posts.user_id')
        .orderBy('id', 'desc')
      .then(result => {
        res.status(200).send(result);
      });
      
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for all entries that include specified tag
  app.get('/api/entries/:tagName', async (req, res) => {
    try {
      const result = await knex.select('title', 'body')
      .from('posts')
      .join('tag_to_post', 'tag_to_post.post_id', '=','posts.id')
      .join('tags', 'tag_to_post.tag_id', '=', 'tags.id')
      .where('tags.tag_name', '=', req.params.tagName);
      res.status(200).send(result);

    } catch (error) {
      res.status(400).send(error);
    }
  });

  // endpoint for getting one entry by id
  app.get('/api/:entryId/entry', async (req,res) => {
    try {
      const entry = await knex
        .from('posts')
        .join('tag_to_post', 'tag_to_post.post_id', '=','posts.id')
        .join('tags', 'tag_to_post.tag_id', '=', 'tags.id')
        .select('title', 'body', 'time_of_day', 'flagged', 'tags.tag_name')
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
        'flagged': flagged,
        'updated_at': new Date()
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

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    console.log('🤪', 'IT FINALLY WORKED');
  });
  
  return app;
}
module.exports = setUpServer;