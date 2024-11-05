// IntroPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroPage() {
  return (
    <div className="intro-container">
      <h1 className="text-2xl font-bold">English Placement Test</h1>
      <p className="mt-4">Please ensure the following:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Find a quiet place.</li>
        <li>Ensure your headphones are working properly.</li>
        <li>Be prepared and focused.</li>
        <li>Click "I don’t know" if you’re unsure of an answer.</li>
      </ul>
      <Link to="/test">
        <button className="mt-6 p-2 bg-blue-500 text-white rounded">Start Test</button>
      </Link>
    </div>
  );
}
