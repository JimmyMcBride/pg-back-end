// Update with your config settings. ⚙️

// Enable .env 💬
require("dotenv").config();

// DATABASE_URL env should follow this format:
// postgres://user_name:password@server/table
// Example: postgres://jimmy:password@localhost:5432/pg_database

module.exports = {
  development: {
    //pointing to our local postgres db
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
