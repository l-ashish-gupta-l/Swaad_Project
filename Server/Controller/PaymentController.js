require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const CartDATA = require("../Model/CartDATA.js");
const Paymentmodal = require("../Model/PaymentModel.js");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const Checkout = async (req, res) => {
  try {
    const { Amount } = req.body;
    const options = {
      amount: Number(Amount * 100),
      currency: "USD",
      receipt: "order_recept",
    };
    const order_Detail = await instance.orders.create(options);
    // console.log(req.body.Cart_data);
    // console.log(order_Detail.id);
    // console.log(req.user_detail.id);

    const order_Detail_saved = await CartDATA.create({
      CartItem: req.body.Cart_data,
      OrderId: order_Detail.id,
      UserID: req.user_detail.id,
      status: "Pending",
      Total_bill_to_pay: order_Detail.amount / 100,
    });
    // console.log(order_Detail_saved);
    res.send(order_Detail);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the order.");
  }
};
const Payment = async (req, res) => {
  // console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature == razorpay_signature) {
    const Payment_detail = await Paymentmodal.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    const updateOrder = await CartDATA.findOneAndUpdate(
      {
        OrderId: Payment_detail.razorpay_order_id,
      },
      { $set: { status: "Paid" } },
      { new: true }
    );
    res.redirect(
      `http://localhost:5173/Paymentsucess?reference=${razorpay_payment_id}`
    );
  } else {
    res.send("Invalid Signature");
  }
};

module.exports = { Checkout, Payment };
