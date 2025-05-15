import React from "react";
import { useGameStore } from "../zustand/gameStore";

function QuestionModal({ question, setShowModal }) {
  const currentQuestion = useGameStore((state) => state.currenQuestion);
  const setCurrentQuestion = useGameStore((state) => state.setCurrentQuestion);

  if (!currentQuestion) return null;

  return (
    <div className="question-modal">
      <h2>{currentQuestion.point}</h2>
      <h1>{currentQuestion.text}</h1>
      <button
        onClick={() => {
          setCurrentQuestion(null);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default QuestionModal;
