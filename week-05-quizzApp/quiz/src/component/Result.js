import React from 'react';


const Result = ({score, restartQuiz }) => {
  
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div>You answered...</div>
    
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  );
}
export default Result;
