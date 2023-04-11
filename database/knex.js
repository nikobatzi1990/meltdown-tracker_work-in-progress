const knex = require('knex');
require('dotenv').config();
const config = require('../knexfile');

module.exports = knex(config);