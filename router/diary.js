const express = require("express");
const router = express.Router();
const { Directory, Diary } = require("../mongoose/model");

router.get("/diary/view", async (req, res) => {
  const diaryInfo = await Diary.find().populate("account");
  res.send({
    status: 200,
    msg: "view diary All",
    diaryInfo,
  });
});

router.post("/diary/create", async (req, res) => {
  const { title, content, account } = req.body;
  const newDiary = await Diary({
    title,
    content,
    account,
  }).save();
  console.log(newDiary);
  if (!newDiary._id) {
    return res.send({
      status: 404,
      msg: "Making diary fail",
    });
  }
  res.send({
    status: 200,
    msg: "diary created",
  });
});

module.exports = router;
