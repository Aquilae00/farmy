exports.up = async function(knex) {
  await knex.schema.alterTable("User", table => {
    table
      .foreign("address_id")
      .references("Address.address_id")
      .onDelete("CASCADE")
      .alter();
  });
  await knex.schema.alterTable("Listing", table => {
    table
      .foreign("lister")
      .references("User.user_id")
      .onDelete("CASCADE")
      .alter();
  });

  await knex.schema.alterTable("Request", table => {
    table
      .foreign("requester")
      .references("User.user_id")
      .onDelete("CASCADE")
      .alter();
  });
};

exports.down = function(knex) {};