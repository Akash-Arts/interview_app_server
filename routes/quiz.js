const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const authMiddleware = require("../middleware/authMidleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:designation", async (req, res) => {
  try {
    const { designation } = req.params;
    const quizzes = await Quiz.find({ designation });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: "Quiz deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/all/:designation", authMiddleware, async (req, res) => {
  try {
    await Quiz.deleteMany({ designation: req.params.designation });
    res.json({ message: "All quizzes deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
