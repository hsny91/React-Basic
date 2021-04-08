import React from 'react';

const Answer = ({ answer,handleAnswerClick }) => {
    return (
      <li
        className="question-answer"
        tabIndex="0"
        onClick={handleAnswerClick}
      >
        {answer}
      </li>
    );
  
}

export default Answer;
