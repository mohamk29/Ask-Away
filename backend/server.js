require("dotenv").config();
const OpenAIApi = require("openai");
const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    //create connection with gpt3.5
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ message: chatCompletion.choices[0].message.content.trim() });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
