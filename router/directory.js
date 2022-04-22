const express = require("express");
const router = express.Router();
const { Directory, User } = require("../mongoose/model");

router.post("/directory/create", async (req, res) => {
  const { title, user } = req.body;
  //   const user = await User.find({ _id: userId });
  const newDirectory = await Directory({
    title,
    user,
  }).save();
  console.log(newDirectory);
  if (!newDirectory._id) {
    return res.send({
      status: 404,
      msg: "Making directory fail",
    });
  }
  res.send({
    status: 200,
    msg: "directory created",
  });
});

module.exports = router;
