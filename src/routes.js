const express = require('express');
const path = require('path');
let app = express();

// form route
app.use(express.static('public'));
app.get("../src/form.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/forms.html"))
});

app.listen(8085);