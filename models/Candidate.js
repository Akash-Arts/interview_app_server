const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
    degree: String,
    passout: String,
    designation: String,
    experience: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);
