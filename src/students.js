const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

pool.connect();

// Save visitor into database
async function addNewVisitor (name, age, date, time, nameOfAssistant, comment) {

  try{
  
    const query = await pool.query(
      "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
      [name, age, date, time, nameOfAssistant, comment]);

      return query.rows

  } catch(err) {
    console.log(err)

  }
};

// Return an array of visitor's names and ID
const visitorsIdName = async () => {

  try {
    const query = await pool.query(
      "SELECT id, visitor_name FROM Visitors",
      []);

      console.log(query.rows[0])
      return;

  } catch(err){
     console.log(err)
  }
};

visitorsIdName();

// Delete a visitor
const deleteVisitor = async (id) => {
  try {
    const query = await pool.query(
      "DELETE FROM Visitors WHERE id = $1", [id]);


      console.log(query.rows)
      return;

  }catch(err){
    console.log(err)

  }
};

// Update a visitor
const updateV = async (id, name, age, date, time, nameOfAssistant, comment) => {

  try {

    const query = await pool.query(
      "UPDATE Visitors SET visitor_name = ${visitor_name}", []);

      return query.rows;

  } catch(err) {
    console.log(err);
  }

};

// Return visitor's info given an id
const visitorId = async () => {

  try {
    
    const query = await pool.query(
      "SELECT * FROM Visitors WHERE id = ${id}", []);
    
      return query.rows

  } catch(err) {
    console.log(err)
  }
  
};

// Delete all visitors 
const deleteAll = async () => {

  try {
    
    const query = await pool.query(
      "DELETE FROM Visitors", []);

      await pool.end()
      return query.rows

  } catch(err) {
    console.log(err)
    await pool.end();
  }
};

module.exports = {
  addNewVisitor,
  visitorsIdName,
  deleteVisitor,
  updateV,
  visitorId,
  deleteAll
}