const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())

app.get("/get", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

// Catch-all route, serves the index.html for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
});

// Showing that the server is up and running
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})