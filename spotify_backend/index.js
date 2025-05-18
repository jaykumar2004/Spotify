const express = require("express");
const app = express();
require("dotenv").config();
const port = 8000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jangidkumarjay:Jaykumar%402004@cluster0.z50shwk.mongodb.net"
  )
  .then((x) => {
    console.log("Database Connection established");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.get("/", (req, res) => {
  res.send("hello there this is a backend project");
});

app.listen(port, () => {
  console.log("App is listining on port : " + port);
});
