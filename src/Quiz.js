import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsData from "./QuestionsData"; // Importing questions data

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [generatedParagraph, setGeneratedParagraph] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State variable to track loading state

  const handleAnswerOptionClick = (selectedScore, selectedKeyword) => {
    setScore(score + selectedScore);
    setSelectedKeywords([...selectedKeywords, selectedKeyword]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    const generateParagraph = async (keywords) => {
      setIsLoading(true); // Set loading state to true before making API call
      try {
        const response = await axios.post("/generate-paragraph", { keywords });

        const content = response.data.choices[0]?.message?.content;
        setGeneratedParagraph(content);

        setIsLoading(false); // Set loading state to false after API call completes
      } catch (error) {
        setIsLoading(false); // Set loading state to false in case of error
        if (error.response && error.response.status === 401) {
          setError("Unauthorized: Please check your API key.");
        } else {
          setError("Error generating paragraph: " + error.message);
        }
      }
    };

    if (showScore) {
      generateParagraph(selectedKeywords);
    }
  }, [showScore, selectedKeywords]);

  return (
    <div className="container mt-5">
      {isLoading ? ( // Render loading animation if loading state is true
        <div className="text-center">
          <p>Loading...</p>
          {/* You can replace this with any loading animation component */}
        </div>
      ) : showScore ? (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Quiz Result</h5>
            <p className="card-text">
              You scored <strong>{score}</strong> out of{" "}
              <strong>{QuestionsData.length * 10}</strong>.<br />
              <br />
              <strong>What Others Think Of You</strong>
              <br /> {generatedParagraph}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Question {currentQuestion + 1}</h5>
              <p className="card-text">
                {QuestionsData[currentQuestion].questionText}
              </p>
            </div>
          </div>
          <div className="mt-3">
            {QuestionsData[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-start">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.score,
                        answerOption.keyword
                      )
                    }>
                    {index + 1}. {answerOption.answerText}
                  </button>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
