const Booking = require('../Model/TableModel');


const Create_User = async (req, res) => {
  try {
    console.log(req.body); 
    const user = Booking.create(req.body);
    res.send("Data created successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { Create_User };