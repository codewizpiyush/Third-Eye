const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/generate-quiz", async (req, res) => {
  const { topic } = req.body;
  try {
    const prompt = `Generate a quiz of 10 multiple-choice questions on "${topic}". 
Each question should include:
1. A question.
2. Four answer options.
3. The correct answer.

Format the response as JSON like this:
[
  {
    "question": "What is JavaScript?",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": "B"
  },
  ...
]`;
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const result = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=" +
        geminiApiKey,
      {
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user",
          },
        ],
      },
    );

    let text = result.data.candidates[0].content.parts[0].text;

    text = text.replace(/```json|```/g, "").trim();

    const quiz = JSON.parse(text); // May need to wrap in `JSON.parse()`
    res.send({ quiz });

    // const startIndex = text.indexOf("[");
    // const endIndex = text.lastIndexOf("]") + 1;
    // const jsonText = text.substring(startIndex, endIndex);
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res.status(500).json({ message: "Failed to generate quiz" });
  }
});

router.post("/submit-quiz", (req, res) => {
  const { userAnswers, quiz } = req.body;

  let score = 0;

  quiz.forEach((q, index) => {
    if (q.correctAnswer === userAnswers[index]) {
      score++;
    }
  });

  return res.send({ score });
});

module.exports = router;
