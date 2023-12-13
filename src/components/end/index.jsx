import React from 'react'
import { EndContainer } from './style'

const End = ({retry,score}) => {
  return (
    <EndContainer>
      <h1>Game over</h1>
      <h2>Sua Pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>tentar denovo</button>
    </EndContainer>
  )
}

export default End
