const express = require("express");
const router = express.Router();
const { User } = require("../mongoose/model");
const session = require("express-session");

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

  req.session._id = loginUser._id;
  req.session.is_logined = true;
  req.session.nickname = loginUser.nickname;
  req.session.email = loginUser.email;

  const userInfo = {
    id: req.session._id,
    is_logined: req.session.is_logined,
    nickname: req.session.nickname,
    email: req.session.email,
  };

  res.send({
    status: 200,
    msg: "login success",
    userInfo,
  });
});

router.post("/user/create", async (req, res) => {
  const { nickname, email, password } = req.body;
  const newUser = await User({
    email,
    nickname,
    password,
  }).save();
  console.log(newUser);
  if (!newUser._id) {
    return res.send({
      status: 404,
      msg: "Making user fail",
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

module.exports = router;
