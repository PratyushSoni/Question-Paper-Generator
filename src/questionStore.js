// src/questionStore.js
const questions = [
  // Waves
  {
    question: "What is the speed of sound in air?",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the phenomenon of diffraction.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define wavelength and frequency in the context of waves.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the speed of light?",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  // ... (add more questions on the Waves topic as needed)

  // Thermodynamics
  {
    question: "What is the first law of thermodynamics?",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of a reversible process in thermodynamics.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is an isothermal process?",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "State the laws of thermodynamics.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Easy",
    marks: 5,
  },
  // ... (add more questions on the Thermodynamics topic as needed)

  // Evolution
  {
    question: "Discuss the role of mutations in the process of evolution.",
    subject: "Biology",
    topic: "Evolution",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is convergent evolution?",
    subject: "Biology",
    topic: "Evolution",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of reproductive isolation.",
    subject: "Biology",
    topic: "Evolution",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the process of natural selection.",
    subject: "Biology",
    topic: "Evolution",
    difficulty: "Easy",
    marks: 20,
  },
  // ... (add more questions on the Evolution topic as needed)

  // Algebra
  {
    question: "Solve the system of equations: 2x + y = 5, x - y = 1.",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question:
      "What is the difference between a linear and a quadratic equation?",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Hard",
    marks: 30,
  },
  {
    question: "Define the term 'polynomial' in algebra.",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Solve the quadratic equation x^2 - 4x + 4 = 0.",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Hard",
    marks: 15,
  },
  // ... (add more questions on the Algebra topic as needed)
];

module.exports = {
  getQuestions: () => questions,
};
