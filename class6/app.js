//npm init -y - installs packagelock.json
//npm install express-installs expressjs library


const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express");
});


app.get("/priducts", (req, res) => {
    res.send('producvts displying');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});