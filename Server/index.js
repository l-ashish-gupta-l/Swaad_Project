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
  isAuthenticated,
  getuserdata,
} = require("./Controller/Controller");
const cors = require("cors");
const Usermodel = require("./Model/UserModel");
const cookieparser = require("cookie-parser");

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieparser());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome from the server");
});

app.post("/createUser", UserCreate);
app.post("/loginUser", UserLogin);
app.post("/create", isAuthenticated, BookingController);
app.get("/Userdata", isAuthenticated, getuserdata);

//Port Listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
