const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
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

const addNewVisitor = () => {
  pool.query(
    "INSERT INTO Visitor values($1::1, $2::'Sekgomotso',$3::30, $4::'17/09/2020',$5::'00:00', $6::'Tumi', $7::'nice')", 
    ["1, 'Sekgomotso',30, '17/09/2020','00:00','Tumi', 'nice'"],
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

addNewVisitor();

const deleteVisitor = () => {
  pool.query(
    "DELETE FROM"
  )
}