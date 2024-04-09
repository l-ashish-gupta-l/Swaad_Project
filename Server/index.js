const express = require("express");
const app = express();
const mongoose = require("./database");
const Booking = require("./Model/TableModel");
const { Create_User } = require("./Controller/Controller");


app.get("/", (req, res) => {
  res.send("Welcome from the server");
});

app.get("/create", Create_User );
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
