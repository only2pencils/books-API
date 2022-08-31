// const router = require("express").Router;
const express = require("express");
const books = express.Router();
const Book = require("../models/book.js");

// INDEX PAGE
books.get("/", (req, res) => {
  res.send(Book);
});

// router.get("/", (req, res) => {
//   res.send("GET /books");

// });

// SHOW
books.get("/:arrayIndex", (req, res) => {
  res.send(Book[req.params.arrayIndex]);
});

module.exports = books;
