const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

// form route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/forms.html")
});

// submit button route
app.post('/http://localhost:3000/new_visit', (req, res) => {
    console.log("done");
    return;
});

app.listen(3000, ()=>{
    console.log("finally")
});