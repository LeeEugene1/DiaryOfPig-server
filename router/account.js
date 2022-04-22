const express = require("express");
const router = express.Router();
const { Account, User } = require("../mongoose/model");

router.post("/account/create", async (req, res) => {
  const { user, directory, content, price, place, pay } = req.body;
  //   const user = await User.find({ _id: userId });
  const payMethod = await Account({
    user, //6260e01fca0213a431c2ed52
    directory, //장보기(6262777abb90e3cbb6d173b7)
    content, //반값세일
    price, //10000
    place, //마트
    pay, //국민카드(6262706f1d35064e5fabdd32)
  }).save();
  console.log(payMethod);
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
