import { useState } from 'react'
import Answers from './answer'
import QTimer from "./question-timer"
import QUESTIONS from '../questions'



export default function Question ({ onselectAnswer,onskipAnswer,index}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 15000;

    if (answer.selectedAnswer) {
        timer = 1000;

    }

    if (answer.isCorrect) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: null
            })

            setTimeout(() => {
                setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            }, 1000);


            setTimeout (() => {
                onselectAnswer(answer)
            }, 2000)
    }

    let answerState = ''

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }


    return (
         <div id="question"> 

        <QTimer 
        key={timer}
        timeout={timer} 
        onTimeout={answer.selectedAnswer === '' ? onskipAnswer : null}
        mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>

        <Answers 
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />

    </div>
    )
}