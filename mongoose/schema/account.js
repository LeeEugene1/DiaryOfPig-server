const mongoose = require("mongoose");
const Account = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  directory: { type: mongoose.Schema.Types.ObjectId, ref: "Directory" }, //월급, 경조사비, 등
  place: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number, required: true },
  pay: { type: mongoose.Schema.Types.ObjectId, ref: "Pay" }, //지불방법
  createdAt: { type: Date, default: Date.now, required: true },
});
module.exports = Account;
