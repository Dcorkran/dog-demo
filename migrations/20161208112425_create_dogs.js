exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', function(table){
    table.increments();
    table.string('name');
    table.integer('age');
    table.string('breed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dogs');
};
