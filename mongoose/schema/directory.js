// 카테고리제목: 월급, 경조사비, 장보기, 간식비 등
const mongoose = require("mongoose");
const Directory = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now, required: true },
});
module.exports = Directory;
