const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

// Get exercises
router.get("/", async (req, res) => {
  try {
    const exercise = await Exercise.find({ exercise: req.exercise }).sort({
      date: -1,
    });
    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ msg: error.message });
  }
});

// create exercise
router.post("/", async (req, res) => {
  try {
    const { userName, description, duration, date } = req.body;
    const newExercise = new Exercise({
      userName,
      description,
      duration,
      date,
    });
    let exercise = await newExercise.save();
    res.json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete exercise
router.delete("/:id", async (req, res) => {
  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }
    await Exercise.findOneAndRemove(req.params.id);
    res.json({ msg: "Exercise deleted..." });
  } catch (error) {
    console.error(error.message);
    res.statud(500).send("Server error");
  }
});

// Update exercise
router.put("/:id", async (req, res) => {
  const { userName, description, duration, date } = req.body;
  const exerciseField = {};
  if (userName)  exerciseField.userName = userName;
  if (description)  exerciseField.description = description;
  if (duration)  exerciseField.duration = duration;
  if (date)  exerciseField.date = date;
  
  try {
    let exercise = await Exercise.findOneAndUpdate(req.params.id, {$set: exerciseField}, {new: true});
    res.json({ exercise })

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error...'})
  }
})
module.exports = router;
