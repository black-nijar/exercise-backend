const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const { userName } = req.body;
    console.log("GET username", userName);
    const user = await User.find({ userName });
    res.json(user);
  } catch (error) {
    res.status(500).json(`Error ${error.message}`);
  }
});

router.post("/", async (req, res) => {
  const { userName } = req.body;
 try {
   let user = await User.findOne({ userName });

  // Check user exist
   if (user) {
     return res.status(400).json({ msg: 'User Exist'})
   }
   user = new User({
     userName
   })
   const new_user = await user.save()
   res.send(new_user)
 } catch (error) {
   console.error(error.message);
   res.status(500).json({ msg: 'Server error'});
 }
});

module.exports = router;
