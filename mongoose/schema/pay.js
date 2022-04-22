// 지불방식 예) 신용카드,현금,제로페이,페이코 등등..
const mongoose = require("mongoose");
const Pay = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now, required: true },
});
module.exports = Pay;
