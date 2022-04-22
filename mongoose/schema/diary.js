const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Diary = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  createdAt: { type: Date, default: Date.now, required: true },
});

Diary.plugin(AutoIncrement, { inc_field: "id" });
module.exports = Diary;
