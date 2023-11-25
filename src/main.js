const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { generateQuestionPaperAPI } = require("../src/questionPaperGenerator");

const app = express();
const port = 3000;

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
