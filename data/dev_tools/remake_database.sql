-- command to run the script in terminal
-- psql -U postgres -a -f remake_database.sql
-- or
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