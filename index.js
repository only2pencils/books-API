// Get the environment variables.
require("dotenv").config();

// Require needed node modules.
const express = require("express");
const app = express();

app.use("/books", require("./controllers/books_controller"));

// HOME PAGE
app.get("/", (req, res) => {
  res.send(`Reading is FUN!`);
});

// WILDCARD ROUTE
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT);
