require("dotenv").config();
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const options = {
  amount: 50000, // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11",
};

const Checkout = async (req, res) => {
  try {
    const order_Detail = await instance.orders.create(options);
    res.send(order_Detail);
    // console.log(order_Detail);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the order.");
  }
};
const Payment = async (req, res) => {
  console.log(req.body);
  res.send("Payment Successful!");
};

module.exports = { Checkout, Payment };