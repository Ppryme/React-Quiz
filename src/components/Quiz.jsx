import { useState, useCallback, useRef } from "react"
import QUESTIONS from '../questions'
import Question from "./question"
import Summary from "./sumary"



export default function Quiz() {
  
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length 
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length



   

   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer) {
           setUserAnswers(prevUserAnswers => [
            ...prevUserAnswers,
            selectedAnswer
  ]);

       
    }, [])

    const handleSkipAnswer = useCallback(() =>handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers = {userAnswers}/>
    }

   

     

    return <div id="quiz" className=" w-2.5">
                <Question 
                key={activeQuestionIndex}
                index = {activeQuestionIndex}
                onselectAnswer={handleSelectAnswer}
                onskipAnswer={handleSkipAnswer}
                />
    </div>
}