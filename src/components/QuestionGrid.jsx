import React from 'react'
import { useGameStore } from '../zustand/gameStore'
import QuestionCard from './QuestionCard'

function QuestionGrid( ) {
    const questions = useGameStore(state=>state.questions)

  return (
    <div className='question-container'>
        {questions.map((question, index) =>{
            return <QuestionCard  key={question.id} index={index+1} question ={question} />
        })}
    </div>
  )
}

export default QuestionGrid