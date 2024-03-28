const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
// Define a route to handle API requests

app.post("/generate-paragraph", async (req, res) => {
  const keywords = req.body.keywords;
  //console.log("Received keywords:", keywords);
  try {
    // Make API call using Axios
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "I am the person having these attitudes. describe me. act as seeress: " +
              (keywords || []).join(", "),
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_TOKEN,
          // Replace with your OpenAI API key
        },
      }
    );

    // Send the response from OpenAI API to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error generating paragraph:", error.message);
    res.status(500).json({ error: "Error generating paragraph" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
