require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require("crypto");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const Checkout = async (req, res) => {
  try {
    const { Amount } = req.body;
    const options = {
      amount: Number(Amount * 100), // amount in the smallest currency unit
      currency: "USD",
      receipt: "order_recept_101",
    };
    const order_Detail = await instance.orders.create(options);
    res.send(order_Detail);w
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the order.");
  }
};
const Payment = async (req, res) => {
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature == razorpay_signature) {
    res.redirect(
      `http://localhost:5173/Paymentsucess?reference=${razorpay_payment_id}`
    );
  } else {
    res.send("Invalid Signature");
  }
};

module.exports = { Checkout, Payment };
