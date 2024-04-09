const mongoose = require("mongoose");

// Define the schema for the booking
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
  bookingDateTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
