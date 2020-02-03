const Pool = require("pg").Pool;
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

const addNewVisitor = () => {
  pool.query(
    "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
    ['Sekgomotso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!'],
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data.rows);
    }
  );
};

addNewVisitor();

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

// const deleteVisitor = () => {
//   pool.query(
//     "DELETE FROM Visitors WHERE $1", ['id = 1'], (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log(data.rows);
//     }
//   );
// };

// deleteVisitor();