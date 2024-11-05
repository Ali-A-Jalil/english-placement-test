// ResultsPage.js
import React from 'react';

const ResultsPage = ({ score, level }) => {
  const finalLevel = determineFinalLevel(score, level);

  return (
    <div className="results-container">
      <h1>Your Level: {finalLevel}</h1>
      <p>Your final score was {score}</p>
    </div>
  );
};

function determineFinalLevel(score, level) {
  if (score >= 20) return level + 1; // Upgrade to next level
  if (score < 10) return level - 1; // Downgrade to previous level
  return level;
}

export default ResultsPage;
