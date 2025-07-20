const mongoose = require("mongoose");
const { DATABASE_URI } = require("./appConfig");
const logger = require("./logger");

const connectDB = async () => {
  await mongoose
    .connect(DATABASE_URI)
    .then(console.log("Connection Successful"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
