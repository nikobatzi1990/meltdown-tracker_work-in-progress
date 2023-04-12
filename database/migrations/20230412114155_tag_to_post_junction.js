/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tag_to_post', function (table) {
    // table.integer('tag_id');
    table.integer('tag_id')
      .references('id')
      .inTable('tags');
    // table.integer('post_id');
    table.integer('post_id')
      .references('id')
      .inTable('posts');

    table.primary(['tag_id','post_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tag_to_post');
};
