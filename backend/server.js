const express = require("express");
const cors = require("cors");
const envVars = require('./app/config/constants')
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to github application." });
});

require("./app/routes/github.routes")(app);

// set port, listen for requests
const PORTNO = envVars.PORT || 8080;
app.listen(PORTNO, () => {
  console.log(`Server is running on port ${PORTNO}.`);
});

module.exports = app