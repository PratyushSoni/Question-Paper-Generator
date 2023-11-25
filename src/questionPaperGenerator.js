// src/questionPaperGenerator.js
const _ = require("lodash");

const generateQuestionPaper = (req) => {
  console.log("Request Body:", req.body);

  const { totalMarks, difficultyDistribution, topics } = req.body;

  console.log("Total Marks:", totalMarks);
  console.log("Difficulty Distribution:", difficultyDistribution);
  console.log("Topics:", topics);

  const questions = require("./questionStore").getQuestions();

  // Function to select questions based on difficulty and count
  const selectQuestions = (difficulty, count) => {
    const difficultyQuestions = _.filter(questions, { difficulty });
    return _.sampleSize(difficultyQuestions, count);
  };

  // Arrays to store marks for each difficulty level and topic
  const marksByDifficulty = _.mapValues(
    difficultyDistribution,
    (percentage, difficulty) => Math.ceil((percentage / 100) * totalMarks)
  );

  const marksByTopic = _.mapValues(
    _.zipObject(topics, new Array(topics.length).fill(0)),
    (percentage) => Math.ceil(((percentage / 100) * totalMarks) / topics.length)
  );

  // Select questions based on difficulty and topic
  const questionPaper = _.flatMap(_.keys(marksByDifficulty), (difficulty) =>
    selectQuestions(difficulty, marksByDifficulty[difficulty])
  ).concat(
    _.flatMap(_.keys(marksByTopic), (topic) =>
      selectQuestions(topic, marksByTopic[topic])
    )
  );

  return questionPaper;
};

const generateQuestionPaperAPI = (req, res) => {
  const { totalMarks, difficultyDistribution, topics } = req.body;

  if (!totalMarks || !difficultyDistribution || !topics) {
    return res.status(400).json({
      error:
        "Invalid input. Please provide totalMarks, difficultyDistribution, and topics.",
    });
  }

  const questionPaper = generateQuestionPaper(req);
  res.json(questionPaper);
};

module.exports = {
  generateQuestionPaper,
  generateQuestionPaperAPI,
};
