// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'; // RegistrationForm.js
import IntroPage from './Components/IntroPage/IntroPage';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import QuestionsData from './Components/QuestionsData/QuestionsData'; // QuestionsData.js

function App() {
  const [level, setLevel] = useState(6);
  const [score, setScore] = useState(0);
  const [studentInfo, setStudentInfo] = useState(null); // To store student information
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const navigate = useNavigate();

  // Restore state from localStorage on component mount
  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    const savedLevel = localStorage.getItem('level');
    const savedIndex = localStorage.getItem('currentQuestionIndex');

    if (savedScore && savedLevel && savedIndex) {
      setScore(parseInt(savedScore));
      setLevel(parseInt(savedLevel));
      setCurrentQuestionIndex(parseInt(savedIndex));
    }
  }, []);

  // Save state to localStorage whenever score, level, or question index changes
  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('level', level);
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }, [score, level, currentQuestionIndex]);

  const handleAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    
    if (QuestionsData[level].length === 30) {
      if (score >= 20 && level < 10) {
        setLevel(level + 1);
      } else if (score < 10 && level > 1) {
        setLevel(level - 1);
      }
      navigate('/results'); // To move to the next page
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    }
  };

  const handleStartExam = (info) => {
    setStudentInfo(info);
    navigate('/intro'); // To move to the next page
  };

  return (
    <div className="app">
      <Routes>
        {/* RegistrationForm.js */}
        <Route path="/" element={<RegistrationForm onStartExam={handleStartExam} />} />

        {/* IntroPage.js */}
        <Route path="/intro" element={<IntroPage onStart={() => navigate('/test')} />} />

        {/* QuestionPage.js */}
        <Route
          path="/test"
          element={
            <QuestionPage
              level={level}
              questions={QuestionsData[level]}
              onAnswer={handleAnswer}
              currentQuestionIndex={currentQuestionIndex}
            />
          }
        />

        {/* ResultsPage.js */}
        <Route path="/results" element={<ResultsPage score={score} level={level} />} />
      </Routes>
    </div>
  );
}

export default App;
