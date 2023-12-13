import React, { useRef, useState } from 'react'
import { GameContainer, Letter, LetterContaainer } from './style'
import { GameForm } from './style'

const Game = ({ verifyLetter,pickedCategory,pickedWord,letters,guessedLetters,wrongLetters,guesses,score,}) => {

  const [letter,setLetter] = useState('')
  const letterInputRef = useRef(null)

  const handlySubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter('')


    letterInputRef.current.focus()
  }
    
  return (
    <GameContainer>
      <p>
        <span>Points:{score}</span>
      </p>
      <h1>Adivinhe a Palavra: </h1>
      <h3>Dica sobre a palavra <span>{pickedCategory}</span></h3>
      <p>voce ainda tem {guesses} tentativas</p>
      <LetterContaainer>
      {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <Letter key={i}>
              {letter}
            </Letter>
          ) : (
            <Letter key={i} ></Letter>
          )
        )}
      </LetterContaainer>
      <div onSubmit={handlySubmit}>
        <p>Tente advinhar a palavra </p>
        <GameForm action="">
          <input type="text"
           maxLength='1'
           required onChange={(e) => setLetter(e.target.value)} 
           value={letter}
           ref={letterInputRef}/>
          <button>Jogar</button>
        </GameForm>
      </div>
      <div>
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </GameContainer>
  )
}

export default Game
