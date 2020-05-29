const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.DATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PORT
});

pool.connect();

// create table
const visitorsTable = async () => {
  try{
     const query = await pool.query(
        `CREATE TABLE IF NOT EXISTS
          Visitors(
            id serial primary key,
            visitor_name varchar(50),
            visitors_age int,
            date_of_visit varchar(10),
            time_of_visit varchar(10),
            assistant varchar(50),
            comments varchar(100);`
    )
     console.log(query.rows)

  }catch(err) {
      
      console.log(err);

  }

  pool.end();

}

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

  pool.end();

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

  pool.end();

};

// Delete a visitor
const deleteVisitor = async (id) => {
  try {
    const query = await pool.query(
      "DELETE FROM Visitors WHERE id = $1", [id]);


      console.log('deleted')
      return;

  }catch(err){
    console.log(err)

  }

  pool.end();

};

// Update a visitor
const updateV = async (name, id) => {

  try {

    const query = await pool.query(
      "UPDATE Visitors SET visitor_name = $1", [name]);

      console.log(query.rows)
      return;

  } catch(err) {
    console.log(err);
  }

  pool.end();

};

// Return visitor's info given an id
const visitorId = async (id) => {

  try {
    
    const query = await pool.query(
      "SELECT * FROM Visitors WHERE id = $1", [id]);
    
      console.log(query.rows)
      return;

  } catch(err) {
    console.log(err)
  }

  pool.end();
  
};

// Delete all visitors 
const deleteAll = async () => {

  try {
    
    const query = await pool.query(
      "DELETE FROM Visitors", []);

      await pool.end()
      console.log(query.rows)
      return;

  } catch(err) {
    console.log(err)
    await pool.end();
  }

  pool.end();

};

module.exports = {
  visitorsTable,
  addNewVisitor,
  visitorsIdName,
  deleteVisitor,
  updateV,
  visitorId,
  deleteAll
}