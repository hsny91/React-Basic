import React from 'react'
import Answer from './Answer'

const Question = ({ question, answers}) => {
    return (
      <li className="question">
        <h2 className="question-title" tabIndex="0">
          {question}
        </h2>
        <ul className="question-answers" tabIndex="-1">
          {answers.map((answer, index) => {
            return (
              <Answer
                answer={answer}
                
              />
            );
          })}
        </ul>
      </li>
    );
  }
  

  
  export default Question;
  