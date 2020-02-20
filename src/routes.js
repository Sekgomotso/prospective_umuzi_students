const express = require('express');
const app = express();
const path = require('path')

const Pool = require("pg").Pool;

require('dotenv').config();

// form route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/form.html"));
});

// submit botton route
app.post("/new_visit", (req, res) => {
    addNewVisitor(req.body.name, req.body.assistant, req.body.age, req.body.date, req.body.time, req.body.comments);
    res.sendFile(path.join(__dirname + "/form.html"));
});

const addNewVisitor = async(name, nameOfAssistant, age, date, time, comment) => {

    pool
    .query(
      "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
      [name, nameOfAssistant, age, date, time, comment])
    .then(data => (data.rows))
    .catch(err => console.error("nope", err.stack))
  };

app.listen(3001, ()=>{
    console.log("server running");
});