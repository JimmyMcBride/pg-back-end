# How To Use Postgres With Knex On Your Node API

--------------------

#### Let's start with our knexfile

_knexfile.js_
```javascript
// Update with your config settings. ⚙️

// Enable .env 💬
require("dotenv").config();

// DATABASE_URL env should follow this format:
// postgres://user_name:password@ipaddress:port/table
// Example: postgres://jimmy:password@localhost:5432/pg_database

module.exports = {
  development: {
    client: "pg",
    // 🔻 Points to our local Postgresql database
    connection: process.env.DATABASE_URL,
    migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
  }
};
```
[How to find your IP address.](https://www.wikihow.com/Find-the-IP-Address-of-Your-PC)

 __Postgresql database URL format:__ postgres://user_name:password@ipaddress:port/database

> Note: localhost is the variable for your ip address.

Now let's switch over to Postgresql in our terminal.

For Mac: `psql`

For Linux: `sudo -u postgres psql` 
> Pro Tip: ⬆️ Write a bash alias for that one!

For Windows: IDK 🤷‍♂

Once you are in, your default database is probably postgres, which is cool.

Let's name our database and the name of the role we want our team to use with our database.

Inside the postgres terminal run the two following commands:
```
postgres=# CREATE ROLE database_team_member WITH LOGIN PASSWORD 'password' CREATEDB;

postgres=# CREATE DATABASE my_database WITH OWNER = database_team_member ENCODING = 'UTF8' CONNECTION LIMIT = -1;
```

There is also a script in here that my good friend [Will Ediger](https://github.com/willediger) figured out and wrote during our labs project that I find really helpful, especially when working with a team where everybody isn't comfortable with postgresql yet.

*remake_database.sql*
```sql
-- command to run the script in terminal
-- 🔻 use this command if your terminal is already in the dev_tools directory
-- psql -U postgres -a -f remake_database.sql
-- or
-- 🔻 use this command if your terminal is pointing at the root directory of your project
-- psql -U postgres -a -f data/dev_tools/remake_database.sql

DROP DATABASE IF EXISTS my_database;
DROP ROLE IF EXISTS database_team_member;

CREATE ROLE database_team_member
WITH 
  LOGIN
  PASSWORD 'password'
  CREATEDB 
  NOSUPERUSER
  NOCREATEROLE
;

CREATE DATABASE my_database
  WITH 
  OWNER = database_team_member
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
;
```

If you are in root directory of the project you can run:

`psql -U postgres -a -f data/dev_tools/remake_database.sql`

If you cd inside of the dev tools folder, then it's:

`psql -U postgres -a -f remake_database.sql`

> The important thing is that the terminal points to this file inside the directory it's in.

The env variable for the database in this project looks like this:

```
DATABASE_URL=postgres://database_team_member:password@localhost:5432/my_database
```

Once your migrations and seeds are written and up-to-date, you can go back into the postgres terminal. We want to make sure that our tables and seeds are there.

`psql || sudo -u postgres psql`
```
// change to your projects database
postgres=# \c my_database

// check the tables in the database
my_database=# \d

// in this case I want to select all my users to see if they are there
my_database=# SELECT * FROM users;

// should return a list of all the users in the database!
```

And that's how to set up postgresql on your Node API using knex!

Any questions feel free to message or email me!

> Email: mcbride967@gmail.com
