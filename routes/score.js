const express = require("express");
const router = express.Router();
const Score = require("../models/Score");
const authMiddleware = require("../middleware/authMidleware");

router.post("/", async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const scores = await Score.find().populate("candidateId");
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
