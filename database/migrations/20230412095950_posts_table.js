/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id')
      .unique();
    table.string('title');
    table.text('body');
    table.integer('user_id')
      .notNullable();
    table.foreign('user_id')
      .references('id')
      .inTable('users');
    table.string('time_of_day');
    table.timestamp('created_at');
    table.boolean('flagged');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
