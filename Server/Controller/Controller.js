const Booking = require("../Model/TableModel");
const Usermodel = require("../Model/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BookingController = async (req, res) => {
  try {
    // console.log(req.body);
    const booking = await Booking.create(req.body);
    res.send("Data created successfully!");
  } catch (error) {
    console.error(error);
  }
};

const UserCreate = async (req, res) => {
  try {
    // console.log(req.body.email);
    const findUserInDB = await Usermodel.findOne({ email: req.body.email });
    if (findUserInDB) {
      res.status(400).json("User is Already Exist");
    } else {
      const hashed_password = await bcrypt.hash(req.body.password, 12);
      const user = await Usermodel.create({
        ...req.body,
        password: hashed_password,
      });
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      const cookie = res.cookie("User", token, {
        httpOnly: true,
      });
      // console.log(cookie);
      res.status(200).send("User created succesfully");
    }
  } catch (err) {
    return res.status(400).send({
      error: "Failed to create new user",
    });
  }
};

const UserLogin = async (req, res) => {
  try {
    const user = await Usermodel.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("User does not exist");
    } else {
      const passwordIsValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      const token =  jwt.sign({ id: user.id }, process.env.SECRET);
      res.cookie("User", token, { httpOnly: true });
      if (passwordIsValid) {
        res.status(200).send(user);
      } else {
        res.status(401).json("Password Incorrect");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJpZCI6IjY2MjIxYTdiZDQxMDI2ZTA3YTYzMzdhNyIsImlhdCI6MTcxMzUxMTMzNn0
//   .dSCuf6sNIx_GdnlI853CseBcU_6Jj5YHDNyPh8WYthw;
module.exports = { BookingController, UserCreate, UserLogin };
