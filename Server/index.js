require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("./database");
const Booking = require("./Model/TableModel");
const {
  BookingController,
  UserCreate,
  UserLogin,
} = require("./Controller/Controller");
const cors = require("cors");
const Usermodel = require("./Model/UserModel");
const cookieparser = require("cookie-parser");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieparser())

//Routes
app.get("/", (req, res) => {
  res.send("Welcome from the server");
});

app.post("/createUser", UserCreate);
app.post("/loginUser", UserLogin);
app.post("/create", BookingController);

//Port Listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
