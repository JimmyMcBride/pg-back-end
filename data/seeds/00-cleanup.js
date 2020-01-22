exports.seed = async function(knex) {
  try {
    await knex.truncate("users");
  } catch (err) {
    console.log(err);
  }
};
