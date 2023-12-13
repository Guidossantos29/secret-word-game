import React from 'react'
import { StartContainer} from './style'

const StartGame = ({nextStage}) => {


  return (
    <StartContainer>
      <h1>Secret Word Game</h1>
      <button onClick={nextStage} >Começar</button>
    </StartContainer>
  )
}

export default StartGame
