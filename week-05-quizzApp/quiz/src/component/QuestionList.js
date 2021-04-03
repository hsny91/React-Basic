import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ quizData, handleAnswerClick}) => {
  return (
    <ul className="question-list">
      {quizData.map(question => {
        return (
          <Question
            key={question.question.props.children.toString()}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </ul>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default QuestionList;

