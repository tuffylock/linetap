# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## sources
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null

## stats
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (users), indexed
source_id       | integer   | not null, foreign key (sources), indexed
start_time      | datetime  | not null
end_time        | datetime  | not null

## mistakes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
stat_id     | integer   | not null, foreign key (stats), indexed
target      | string    | not null
error       | string    | not null
location    | integer   | not null

