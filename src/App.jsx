import React from 'react'
import { useGameStore } from './zustand/gameStore'
import Game from './components/Game'
import './App.css'

function App() {
  const questions = useGameStore(state => state.questions)
  return (
    <Game/>
  )
}

export default App