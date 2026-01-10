const mongoose = require("mongoose");

const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    designation: {
      type: String,
      required: true, // Web Developer, Graphic Designer, Accounts
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length === 4, "Must have 4 options"],
    },
    correctIndex: {
      type: Number,
      required: true,
      min: 0,
      max: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
