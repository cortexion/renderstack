//const itemsPool = require('./db.js');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

var corsOptions = {
  origin: "https://renderstack.onrender.com/"//http://localhost:3001"
};

const app = express();
const port = process.env.PORT || 3001;

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))
app.use(express.json())
app.use(cors(corsOptions))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");
const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  //console.log('Drop and Resync Database with { force: true }');
  //initial();
});

app.get("/get", (req, res) => {
    res.json({ message: "Welcome to the application!" });
});

// Catch-all route, serves the index.html for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Showing that the server is up and running
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}