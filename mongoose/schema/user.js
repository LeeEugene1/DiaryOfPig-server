const mongoose = require("mongoose");
const User = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  nickname: { type: String, required: true, unique: true },
});

module.exports = User;
