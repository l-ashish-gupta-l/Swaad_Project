const mongoose = require("mongoose");

const Paymentschema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const Paymentmodal = mongoose.model("Payment", Paymentschema);

module.exports = Paymentmodal;
