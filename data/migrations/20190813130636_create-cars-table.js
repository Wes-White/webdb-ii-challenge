exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl
      .text('VIN')
      .unique()
      .notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.integer('mileage').notNullable();
  });
};

exports.down = function(knex) {};
