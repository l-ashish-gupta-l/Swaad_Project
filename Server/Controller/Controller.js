const Booking = require('../Model/TableModel');
const Usermodel = require("../Model/UserModel.js");

const BookingController = async (req, res) => {
  try {
    // console.log(req.body); 
    const booking = await Booking.create(req.body);
    res.send("Data created successfully!");
  } catch (error) {
    console.error(error);
  }
};

const UserCreate =  async (req, res) => {
  try {
    // console.log(req.body.email);
    const findUserInDB = await Usermodel.findOne({ email: req.body.email });
    if (findUserInDB) { 
      res.status(400).json("User is Already Exist")
    }
    else {
    const user = await Usermodel.create(req.body);
    res.status(200).send("User created succesfully")
    }
  } catch (err) {
    return res.status(400).send({
      error: "Failed to create new user",
    });
  }
}

const UserLogin = async (req, res) => { 
  try {
  const user = await Usermodel.findOne({ email: req.body.email })
    if (!user) {
      res.status(401).json('User does not exist' )
    } else {
      if (user.password === req.body.password) {
       res.status(200).send(user)
      } else {
        res.status(401).json('Password Incorrect')
     }  
    }
    
  
    
  } catch (err) {
    console.log(err)
  }
}

module.exports = { BookingController, UserCreate, UserLogin };