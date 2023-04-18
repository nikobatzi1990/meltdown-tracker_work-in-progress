require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.LOCAL_HOST,
      port: process.env.LOCAL_PORT,
      user: process.env.LOCAL_USER,
      password: process.env.LOCAL_PASSWORD,
      database: process.env.LOCAL_DATABASE,
    },
    searchPath: 'public',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    searchPath: 'public',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }
}