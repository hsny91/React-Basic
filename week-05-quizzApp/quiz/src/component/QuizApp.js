import React, { useState } from 'react';
import QUIZ_DATA from '../data/quiz-data'
import Quiz from './Quiz'
import shuffleQuestions from '../utility/shuffleQuestions'

/**
 * QuizApp componenti <Quiz/> ve <Result> componentlerinin atasidir.
 * @returns 
 */
export default function QuizApp() {
   const [data, setData] = useState({
        quizData: shuffleQuestions(QUIZ_DATA),
        step: 1,
        score: 0,
        totalQuestions:10,
   });

   const handleAnswerClick = (index) => (e) => {
        const { quizData, score } = data;
        const isCorrect = quizData[0].correct === index; 

        if (isCorrect && e.target.nodeName === 'LI') {
          e.target.parentNode.style.pointerEvents = 'none';
          e.target.classList.add('right');        
        }
        else if (e.target.nodeName === 'LI') {
          e.target.style.pointerEvents = 'none';
          e.target.classList.add('wrong');
        }
        setTimeout(nextStep,750);
      };

     const nextStep = () => {
        const {quizData, step, score} = data;
        const restOfQuestions = quizData.slice(1);
        setData({
            step: step + 1,
            quizData: restOfQuestions,
            score: score + 10,
          });
      };
   
    return (
        <div>
           <Quiz quizData={data.quizData} 
                 step={data.step}
                 totalQuestions={data.totalQuestions}
                 score={data.score}
                 handleAnswerClick={handleAnswerClick}
            />
        </div>
    )
}
