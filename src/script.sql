CREATE TABLE Visitors(
  id serial primary key,
  visitor_name varchar(50),
  visitors_age int,
  date_of_visit varchar(10),
  time_of_visit varchar(10),
  assistant varchar(50),
  comments varchar(100)
);