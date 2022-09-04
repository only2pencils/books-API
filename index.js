// // Get the environment variables.
// require("dotenv").config();

// // Require needed node modules.
// const express = require("express");
// const app = express();

// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());

// app.use("/books", require("./controllers/books_controller"));

// // HOME PAGE ROUTE
// app.get("/", (req, res) => {
//   res.send(`Home`);
// });

// // WILDCARD ROUTE
// app.get("*", (req, res) => {
//   res.send("error404");
// });

// // Listen to a port number defined by a local environment variable.
// app.listen(process.env.PORT);
