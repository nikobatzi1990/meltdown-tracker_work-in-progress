/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('tag_to_post', (table) => {
    table.dropForeign('tag_id');
    table.dropForeign('post_id');

    table.foreign('tag_id')
      .references('tags.id')
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.foreign('post_id')
      .references('posts.id')
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('tag_to_post', (table) => {
    table.dropForeign('tag_id');
    table.dropForeign('post_id');

    table.foreign('tag_id')
      .references('tags.id')
      .onDelete("NO ACTION")
      .onUpdate("NO ACTION");

    table.foreign('post_id')
      .references('posts.id')
      .onDelete("NO ACTION")
      .onUpdate("NO ACTION");
  });
};
