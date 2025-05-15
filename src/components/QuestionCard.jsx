import React from 'react'

function QuestionCard({ question, index }) {
    console.log(question);
    
  return (
    <div className='box' onClick={()=>{alert(question.text)}}>
        <h2>{index}</h2>
    </div>
  )
}

export default QuestionCard