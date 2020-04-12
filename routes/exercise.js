const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

router.get("/", async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ msg: error.message});
  }
});

router.post("/", async (req, res) => {
  try {
    const { userName, description, duration, date } = req.body;
    const newExercise = new Exercise({
      userName,
      description,
      duration,
      date
    })
    let exercise = await newExercise.save();
    res.json(exercise);
  } catch (error) {
    
  }
})

module.exports = router;