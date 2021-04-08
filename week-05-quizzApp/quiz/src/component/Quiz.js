import React from 'react';
import Question from './Question';

const Quiz = ({ step, quizData, totalQuestions, score, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">of <span>{totalQuestions}</span></div>
        </div>
        <h1>Word Quiz</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>
      <div className="questions">
      <ul className="question-list">
      {quizData.map(question => {
        return (
          <Question
            key={question.question.props.children.toString()}
            question={question.question}// sorularin hepsi Question componentine gonderilir ancak css ile sadece ilk soru ekranda gorunur.
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </ul>
      </div>
    </div>
  );
}


export default Quiz;

  
 

  