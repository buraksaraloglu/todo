const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URI = process.env.DB_URI;

const connectDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("db connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
