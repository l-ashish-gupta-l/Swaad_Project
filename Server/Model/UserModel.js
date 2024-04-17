const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});


const Usermodel = mongoose.model("Usermodel", userschema);
module.exports=Usermodel;