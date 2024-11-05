// QuestionPage.js
import React, { useState, useEffect } from 'react';

const QuestionPage = ({ level, questions, onAnswer }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5); // Time left for each question
  const [showOptions, setShowOptions] = useState(false); // Controls the visibility of options

  // Configure the current question
  const currentQuestion = questions && questions.length > 0 ? questions[currentQuestionIndex] : null;

  // Show options after 2 seconds
  useEffect(() => {
    setShowOptions(false); // Hide options before 2 seconds
    const optionTimer = setTimeout(() => setShowOptions(true), 2000); // Show options after 2 seconds
    return () => clearTimeout(optionTimer); // Clear the timeout when the component unmounts
  }, [currentQuestionIndex]);

  // Timer for each question
  useEffect(() => {
    if (timeLeft > 0 && currentQuestion) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleAnswer(null); // when time runs out
    }
  }, [timeLeft, currentQuestion]);

  const handleAnswer = (answer) => {
    if (currentQuestion) {
      onAnswer(answer, currentQuestion.answer);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(5); // Reset the time
    }
  };

  if (!currentQuestion) {
    return <div>No questions available</div>;
  }

  return (
    <div className="question-container">
      <h2>Level {level}</h2>
      <p>{currentQuestion.question}</p>

      {/* Show options after 2 seconds */}
      {showOptions ? (
        <div className="options">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
          <button onClick={() => handleAnswer(null)} className="option-button">
            I don’t know
          </button>
        </div>
      ) : (
        <p>Loading options...</p> // Loading animation
      )}

      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default QuestionPage;
