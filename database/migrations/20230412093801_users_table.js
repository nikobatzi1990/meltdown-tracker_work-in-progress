/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.varchar('username')
      .unique()
      .notNullable();
    table.varchar('email')
      .unique()
      .notNullable();
    table.varchar('UID')
      .unique()
      .notNullable();
    table.timestamp('created_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
