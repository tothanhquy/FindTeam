const express = require("express");
const path = require('path');

// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// let Trangchu = require(path.join(__dirname,'app/routes/Trangchu.routes.js'));
// ...
// app.use('/Trangchu', Trangchu);

// app.use('/', Trangchu);

app.get ("/", (req, res) => { 
  res.sendFile(path.join(__dirname,"public","index.html")); 
});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// const db = require("./app/models");
// db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});