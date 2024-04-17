const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
  name: {
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
  numberOfPeople: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },

  bookingTime: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
