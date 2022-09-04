// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
// console.log(PORT);
const app = express();

// MIDDLEWARE
// app.set("views", __dirname + "/views");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());

// ROUTES
// app.get("/", (req, res) => {
//   res.send("Reading is fundamental!");
// });

// Books
// const booksController = require("./controllers/books_controller.js");
// app.use("/books", booksController);

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
