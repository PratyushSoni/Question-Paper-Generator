const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { generateQuestionPaperAPI } = require("../src/questionPaperGenerator");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://question-paper-generator-9umx.onrender.com"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware to parse JSON in requests
app.use(bodyParser.json());

// API endpoint for generating a question paper
app.post("/generateQuestionPaper", generateQuestionPaperAPI);

// Serve the index.html file for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
