import React, { useState } from 'react';
import QUIZ_DATA from '../data/quiz-data'
import Quiz from './Quiz'
import shuffleQuestions from '../utility/shuffleQuestions'

export default function QuizApp() {
    const [data, setData] = useState({
        quizData: shuffleQuestions(QUIZ_DATA),
        step: '',
        score: 0,
        totalQuestions:10,
      });

    return (
        <div>
           <Quiz quizData={data.quizData} 
                 step={data.step}
                 totalQuestions={data.totalQuestions}
                 score={data.score}
            />
        </div>
    )
}
