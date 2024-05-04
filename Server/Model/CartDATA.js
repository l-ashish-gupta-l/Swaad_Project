const mongoose = require("mongoose");

const CartDATAschema = new mongoose.Schema({
  CartItem: {
    type: Array,
    require: true,
  },
  OrderId: {
    type: String,
    required: true,
  },
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Usermodel",
  },
  status: {
    type: String,
    required: true,
  },
  Total_bill_to_pay: {
    type: Number,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

// Create a model using the schema
const CartDATA = mongoose.model("CartDATA", CartDATAschema);

module.exports = CartDATA;
