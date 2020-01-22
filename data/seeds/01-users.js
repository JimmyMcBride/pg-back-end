exports.seed = function(knex) {
  // Deletes ALL existing entries 💀
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries 🌱
      return knex("users").insert([
        {
          id: 1,
          first_name: "Jimmy",
          last_name: "McBride",
          display_name: "Jimmy McBride",
          email: "jimmymcbride@protonmail.com"
        },
        {
          id: 2,
          first_name: "Richard",
          last_name: "Rahl",
          display_name: "Richard Rahl",
          email: "warwizard@westland.com"
        }
      ]);
    });
};
