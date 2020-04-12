const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
);

module.exports = mongoose.model('user', userShema);
