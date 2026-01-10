const Quiz = require("../models/Quiz");

const defaultQuizzes = [
  {
    designation: "Web Developer",
    question: "What does HTML stand for?",
    options: [
      { text: "Hyper Text Markup Language", isCorrect: true },
      { text: "High Text Machine Language", isCorrect: false },
      { text: "Hyper Tabular Markup Language", isCorrect: false },
      { text: "None of these", isCorrect: false },
    ],
  },
  {
    designation: "Web Developer",
    question: "Which hook is used for side effects in React?",
    options: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useMemo", isCorrect: false },
      { text: "useRef", isCorrect: false },
    ],
  },
  {
    designation: "Web Developer",
    question: "Which HTTP method is used to update data?",
    options: [
      { text: "PUT", isCorrect: true },
      { text: "GET", isCorrect: false },
      { text: "POST", isCorrect: false },
      { text: "DELETE", isCorrect: false },
    ],
  },
  {
    designation: "Web Developer",
    question: "What is MongoDB?",
    options: [
      { text: "NoSQL Database", isCorrect: true },
      { text: "SQL Database", isCorrect: false },
      { text: "Programming Language", isCorrect: false },
      { text: "Framework", isCorrect: false },
    ],
  },
  {
    designation: "Web Developer",
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      { text: "//", isCorrect: true },
      { text: "<!-- -->", isCorrect: false },
      { text: "#", isCorrect: false },
      { text: "**", isCorrect: false },
    ],
  },

  {
    designation: "Graphic Designer",
    question: "Which software is used for vector design?",
    options: [
      { text: "Adobe Illustrator", isCorrect: true },
      { text: "Photoshop", isCorrect: false },
      { text: "Canva", isCorrect: false },
      { text: "Figma", isCorrect: false },
    ],
  },
  {
    designation: "Graphic Designer",
    question: "What does RGB stand for?",
    options: [
      { text: "Red Green Blue", isCorrect: true },
      { text: "Royal Green Blue", isCorrect: false },
      { text: "Red Gold Black", isCorrect: false },
      { text: "None", isCorrect: false },
    ],
  },
  {
    designation: "Graphic Designer",
    question: "Which format supports transparency?",
    options: [
      { text: "PNG", isCorrect: true },
      { text: "JPG", isCorrect: false },
      { text: "BMP", isCorrect: false },
      { text: "TIFF", isCorrect: false },
    ],
  },
  {
    designation: "Graphic Designer",
    question: "Which principle ensures balance?",
    options: [
      { text: "Alignment", isCorrect: true },
      { text: "Contrast", isCorrect: false },
      { text: "Hierarchy", isCorrect: false },
      { text: "Repetition", isCorrect: false },
    ],
  },
  {
    designation: "Graphic Designer",
    question: "Which tool is used for UI design?",
    options: [
      { text: "Figma", isCorrect: true },
      { text: "Blender", isCorrect: false },
      { text: "After Effects", isCorrect: false },
      { text: "Premiere Pro", isCorrect: false },
    ],
  },

  {
    designation: "Accounts",
    question: "What does GST stand for?",
    options: [
      { text: "Goods and Services Tax", isCorrect: true },
      { text: "General Sales Tax", isCorrect: false },
      { text: "Global Service Tax", isCorrect: false },
      { text: "None", isCorrect: false },
    ],
  },
  {
    designation: "Accounts",
    question: "Which is a current asset?",
    options: [
      { text: "Cash", isCorrect: true },
      { text: "Building", isCorrect: false },
      { text: "Land", isCorrect: false },
      { text: "Goodwill", isCorrect: false },
    ],
  },
  {
    designation: "Accounts",
    question: "Debit increases which account?",
    options: [
      { text: "Asset", isCorrect: true },
      { text: "Liability", isCorrect: false },
      { text: "Income", isCorrect: false },
      { text: "Capital", isCorrect: false },
    ],
  },
  {
    designation: "Accounts",
    question: "Profit is calculated as?",
    options: [
      { text: "Income - Expense", isCorrect: true },
      { text: "Expense - Income", isCorrect: false },
      { text: "Asset - Liability", isCorrect: false },
      { text: "None", isCorrect: false },
    ],
  },
  {
    designation: "Accounts",
    question: "Which statement shows financial position?",
    options: [
      { text: "Balance Sheet", isCorrect: true },
      { text: "Profit & Loss", isCorrect: false },
      { text: "Cash Flow", isCorrect: false },
      { text: "Trial Balance", isCorrect: false },
    ],
  },
];

const seedQuizzes = async () => {
  const count = await Quiz.countDocuments();
  if (count === 0) {
    await Quiz.insertMany(defaultQuizzes);
    console.log("Default quizzes seeded");
  }
};

module.exports = seedQuizzes;
