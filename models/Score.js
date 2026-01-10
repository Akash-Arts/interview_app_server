const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
    score: Number,
    attempt: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", scoreSchema);
