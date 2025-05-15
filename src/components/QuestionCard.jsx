import React, { useState } from "react";
import { useGameStore } from "../zustand/gameStore";

function QuestionCard({ index, question }) {
  const setCurrentQuestion = useGameStore(state => state.setCurrentQuestion);

  return (
    <div className="box" onClick={() => setCurrentQuestion(question)}>
      <h2>{index}</h2>
    </div>
  );
}

export default QuestionCard;
