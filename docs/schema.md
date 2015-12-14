# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## sources
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
characters  | integer   | not null

## stats
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (users), indexed
source_id       | integer   | not null, foreign key (sources)
date            | datetime  | not null, indexed
completion_time | integer   | not null

## mistakes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
stat_id     | integer   | not null, foreign key (stats)
target      | string    | not null
mistake     | string    | not null

