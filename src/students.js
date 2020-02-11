const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "prospective_umuzi_students",
  password: "pass",
  port: 5432
});

const helloWorld = () => {
  pool.query(
    "SELECT $1::text as message",
    ["Hello world!"],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

helloWorld();

// Save visitor into database
const addNewVisitor = async(name, age, date, time, nameOfAssistant, comment) => {

  var result;

  pool.query(
    "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
    [name, age, date, time, nameOfAssistant, comment],
    async (err, data) => {
      if (err) {
        throw err;
      }

      result = await data;

    }
  );
  return await result;
};
let result = addNewVisitor('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!')
console.log(result)

// Return visitor's names and ID
const visitorsIdName = () => {
  pool.query(
    "SELECT id, visitor_name FROM Visitors",
    [], (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

visitorsIdName();

// Delete a visitor
const deleteVisitor = () => {
  pool.query(
    "DELETE FROM Visitors WHERE id = $1", [35], (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

deleteVisitor();

// Update a visitor
const updateV = () => {

  pool.query(
    "UPDATE Visitors SET visitor_name = $1", ['juju'], (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

updateV();

// Return visitor's info given an id
const visitorId = () => {
  
  pool.query(
    "SELECT * FROM Visitors WHERE id = $1", [36], (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

visitorId();

// Delete all visitors 
const deleteAll = () => {
  pool.query(
    "DELETE FROM Visitors", [], (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

deleteAll();

module.exports = {
  addNewVisitor,
  visitorsIdName,
  deleteVisitor,
  updateV,
  visitorId,
  deleteAll
}