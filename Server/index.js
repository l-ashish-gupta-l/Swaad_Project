const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("./database");
const Booking = require("./Model/TableModel");

const { BookingController , UserCreate } = require("./Controller/Controller");
const cors = require("cors");
const Usermodel = require("./Model/UserModel");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome from the server");
});

app.post("/createUser", UserCreate);

app.post("/create", BookingController);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
