/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tags', function (table) {
    table.increments('id')
      .unique();
    table.integer('user_id')
      .notNullable();
    table.foreign('user_id')
      .references('id')
      .inTable('users');
    table.string('tag_name')
      .notNullable();
    table.integer('times_used')
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};
