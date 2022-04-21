const express = require("express");
const router = express.Router();
const { User } = require("../mongoose/model");

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await User.findOne({ email: email });
  if (!loginUser) {
    return res.send({
      status: 404,
      msg: "There is no email address",
    });
  }
  const correctPassword = await loginUser.authenticate(password);
  if (!correctPassword) {
    return res.send({
      status: 404,
      msg: "The Password is wrong",
    });
  }

  res.send({
    status: 200,
    msg: "login success",
  });
});

router.post("/user/create", async (req, res) => {
  const { nickname, email, password } = req.body;

  const newUser = await User.findOneAndUpdate({
    email,
    nickname,
    password,
  }).save();
  console.log(newUser);
  if (!newUser._id) {
    return res.send({
      status: 404,
      msg: "There is no email address",
    });
  }
  res.send({
    status: 200,
    msg: "user created",
  });
});

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const userInfo = await User.find({ _id: id });
  res.send({
    userInfo,
  });
});

module.export = router;
