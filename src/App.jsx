import React from 'react'
import { useGameStore } from './zustand/gameStore'

function App({questions}) {
  const questions = useGameStore(state => state.questions)
  return (
    <div>

    </div>
  )
}

export default App