const Booking = require('../Model/TableModel');


const Create_User = async (req, res) => {
  try {
    const user = Booking.create({
      name: "Ashish",
      email: "done",
      phone: "123456789",
      numberOfPeople: "2",
      bookingDateTime: new Date(),
    });
    res.send("Data created successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { Create_User };