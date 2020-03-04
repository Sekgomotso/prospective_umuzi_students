const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "prospective_umuzi_students",
  password: "pass",
  port: 5432
});

pool.connect();

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

  try{
  
    query = await pool.query(
      "INSERT INTO Visitors (visitor_name,                  visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
      [name, age, date, time, nameOfAssistant, comment]);

      console.log(query.rows)
      await pool.end()
      // return query.rows

  } catch(err) {
    console.log(err)

    await pool.end();
  }
};

addNewVisitor('Nothile', 25, '01/02/2020','14:00','Thami', 'Awesome.');

// Return visitor's names and ID
const visitorsIdName = async () => {

  try {
    query = pool.query(
      "SELECT id, visitor_name FROM Visitors",
      []);

      return query.rows

  } catch(err){
     console.log(err)
  }
};

visitorsIdName();

// Delete a visitor
const deleteVisitor = async () => {
  try {
    query = pool.query(
      "DELETE FROM Visitors WHERE id = $1", [31]);


      return query.rows

  }catch(err){
    console.log(err)

  }
};

deleteVisitor();

// Update a visitor
const updateV = async () => {

  try {

    query = pool.query(
      "UPDATE Visitors SET visitor_name = $1", ['Mbuso']);

      return query.rows;

  } catch(err) {
    console.log(err);
  }

};

updateV();

// Return visitor's info given an id
const visitorId = async () => {

  try {
    
    query = pool.query(
      "SELECT * FROM Visitors WHERE id = $1", [32]);
    
      return query.rows

  } catch(err) {
    console.log(err)
  }
  
};

visitorId();

// Delete all visitors 
const deleteAll = async () => {

  try {
    
    query = pool.query(
      "DELETE FROM Visitors", []);

      return query.rows

  } catch(err) {
    console.log(err)
  }
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