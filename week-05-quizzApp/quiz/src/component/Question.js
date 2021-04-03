import React from 'react'
import Answer from './Answer'

const Question = ({ question, answers, handleAnswerClick, handleEnterPress }) => {
  return (
    <li className="question">
      <h2 className="question-title" tabIndex="0">
        {question}
      </h2>
      <ul className="question-answers" tabIndex="-1">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick(index)}
            />
          );
        })}
      </ul>
    </li>
  );
}



export default Question;