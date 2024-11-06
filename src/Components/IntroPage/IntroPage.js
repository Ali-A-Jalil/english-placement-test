// IntroPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroPage() {
  return (
    <div className="intro-container">
      <h1 className="text-2xl font-bold">English Placement Test</h1>
      <p className="mt-4">Explanation of the Exam:</p>
      <ul className="list-disc list-inside mt-2">
        <li>The exam starts from the sixth level.</li>
        <li>The exam is made up of choices.</li>
        <li>The answer time is five seconds.</li>
        <li>Starting from level 7 to level 10, the questions do not show,<br/> (Just listen), but the choices will be show.</li>
      </ul>
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
