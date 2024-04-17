const Booking = require('../Model/TableModel');
const Usermodel = require("../Model/UserModel.js");

const BookingController = async (req, res) => {
  try {
    console.log(req.body); 
    const booking = await Booking.create(req.body);
    res.send("Data created successfully!");
  } catch (error) {
    console.error(error);
  }
};

const UserCreate =  async (req, res) => {
  try {
    const user = await Usermodel.create(req.body);
    res.send ("User created succesfully")
  } catch (err) {
    return res.status(400).send({
      error: "Failed to create new user",
    });
  }
}

module.exports = { BookingController  , UserCreate};