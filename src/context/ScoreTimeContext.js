import React from 'react'

const ScoreTimeContext = React.createContext({
  score: 0,
  setScore: () => {},
  timeRemains: 0,
  setTimeRemains: () => {},
})

export default ScoreTimeContext
