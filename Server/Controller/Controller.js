const CartDATA = require("../Model/CartDATA.js");
const Booking = require("../Model/TableModel");
const Usermodel = require("../Model/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const jwtoken = req.cookies.User;
  // console.log(req.cookies.User);
  if (!jwtoken) {
    res.status(400).send("Cookie  not set! SIGNIN or LOGIN");
  } else {
    const user_detail = await Usermodel.findOne({
      token: jwtoken,
    });
    req.user_detail = user_detail;
    next();
  }
};

const getuserdata = async (req, res) => {
  res.status(200).send(req.user_detail);
};

const BookingController = async (req, res) => {
  try {
    // console.log(req.body);
    const booking = await Booking.create(req.body);
    console.log(req.user_detail);
    res.status(200).send("Data created successfully!");
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
      user.token = token;
      await user.save();
      const cookie = res.cookie("User", token, {
        httpOnly: true,
        maxAge: 10 * 24 * 60 * 60 * 1000,
      });
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

      if (passwordIsValid) {
        res.cookie("User", user.token, {
          httpOnly: true,
          maxAge: 10 * 24 * 60 * 60 * 1000,
        });
        res.status(200).send(user);
      } else {
        res.status(401).json("Password Incorrect");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const LogoutUser = async (req, res) => {
  try {
    //delete the cookie from client side
    res.clearCookie("User").send("cookie dlted");
  } catch (error) {
    console.log(error);
  }
};

//admin controller
const AllUser = async (req, res) => {
  try {
    const All_USER_DATA = await Usermodel.find();
    res.send(All_USER_DATA);
  } catch (err) {
    console.log(err);
  }
};
const Allorders = async (req, res) => {
  try {
    const All_CART_DATA = await CartDATA.find();
    res.send(All_CART_DATA);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  BookingController,
  UserCreate,
  UserLogin,
  isAuthenticated,
  getuserdata,
  LogoutUser,
  AllUser,
  Allorders,
};
