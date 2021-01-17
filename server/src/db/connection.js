const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.DB_URI;

const connectDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // eslint-disable-next-line no-console
    .then(console.log('db connected'))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
};

module.exports = connectDB;