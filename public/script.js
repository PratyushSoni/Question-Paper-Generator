// public/script.js
async function generateQuestionPaper() {
  const totalMarks = document.getElementById("totalMarks").value;
  const easy = document.getElementById("easy").value;
  const medium = document.getElementById("medium").value;
  const hard = document.getElementById("hard").value;
  const topics = document
    .getElementById("topics")
    .value.split(",")
    .map((topic) => topic.trim());

  try {
    const response = await fetch(
      "http://localhost:3000/generateQuestionPaper",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalMarks,
          difficultyDistribution: {
            Easy: easy,
            Medium: medium,
            Hard: hard,
          },
          topics,
        }),
      }
    );

    const result = await response.json();
    displayResult(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResult(result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Generated Question Paper:</p><pre>${JSON.stringify(
    result,
    null,
    2
  )}</pre>`;
}
