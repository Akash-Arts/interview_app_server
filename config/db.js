const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const seedQuizzes = require("../seed/defaultQuiz");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const existingHR = await User.findOne({ email: "akash@gmail.com" });
    seedQuizzes()

    if (!existingHR) {
      const hashedPassword = await bcrypt.hash("akash123", 10);

      await User.create({
        name: "HR Admin",
        email: "akash@gmail.com",
        password: hashedPassword,
        role: "HR",
      });

      console.log("Default HR user created");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
