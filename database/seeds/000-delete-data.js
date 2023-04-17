/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tag_to_post').del();
  await knex('tags').del();
  await knex('posts').del();
  await knex('users').del();
};