exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.text("first_name").notNullable();
    tbl.text("last_name").notNullable();
    tbl.text("display_name").notNullable();
    tbl.text("email").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
