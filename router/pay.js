const express = require("express");
const router = express.Router();
const { Pay, User } = require("../mongoose/model");

router.get("/pay/view", async (req, res) => {
  const payInfo = await Pay.find().populate("user");
  res.send({
    status: 200,
    msg: "paymethod created",
    payInfo,
  });
});

router.post("/pay/create", async (req, res) => {
  const { title, userId } = req.body;
  const payMethod = await Pay({
    title,
    userId,
  }).save();
  console.log(payMethod);
  //   res.send(payMethod._id ? true : false);
  if (!payMethod._id) {
    return res.send({
      status: 404,
      msg: "Making paymethod fail",
    });
  }
  res.send({
    status: 200,
    msg: "paymethod created",
  });
});

module.exports = router;
