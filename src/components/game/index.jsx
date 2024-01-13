import React, { useRef, useState } from 'react'
import { GameContainer, Letter, LetterContaainer } from './style'
import { GameForm } from './style'
import Dashboard from '../Dashboard/index'

const Game = ({ verifyLetter,pickedCategory,pickedWord,letters,guessedLetters,wrongLetters,guesses,score,}) => {

  const [letter,setLetter] = useState('')
  const letterInputRef = useRef(null)
  const [togglePessoa1, setTogglePessoa1] = useState(false)
  const [togglePessoa2, setTogglePessoa2] = useState(false)
  const [togglePessoa3, setTogglePessoa3] = useState(false)

  const quemEOPica = 'Falcão'

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

      <div style={{display: 'flex'}}>
        <button onClick={() => setTogglePessoa1(!togglePessoa1)}>P1</button>
        <button onClick={() => setTogglePessoa2(!togglePessoa2)}>P2</button>
        <button onClick={() => setTogglePessoa3(!togglePessoa3)}>P3</button>
      </div>

      {togglePessoa1 && <Dashboard pickedColor={'orange'} cpf={score} name={quemEOPica} idade={26}/>}      
      {togglePessoa2 && <Dashboard  pickedColor={'black'} name={`Guilherme`} cpf={`14931041795`} idade={23}/>}
      {togglePessoa3 && <Dashboard  name={`Lucas`} cpf={`14931041795`} idade={23}/>}
    </GameContainer>
  )
}

export default Game
