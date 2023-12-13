import { useState,useCallback,useEffect } from 'react'
import GlobalStyleComponent from './styles/global'
import StartGame from './components/StartGame'
import { wordList } from './data/word'
import Game from './components/game'
import End from './components/end'

const stages = [
  { id:1, name:'start'},
  { id:2, name:'game'},
  { id:3, name:'end'},
 ]

 const guessesNumber = 3

function App() {

  const [gamestage,setGameStage] = useState(stages[0].name)
  const [pickedWord,setPickedWord] = useState()
  const [pickedCategory,setPickedCategory] = useState()
  const [letters,setLetters] = useState()

  const [guessedLetters,setGuessedLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [guesses,setGuesses] = useState(guessesNumber)
  const [score,setScore] = useState(0)

  const pickWordandCategory = useCallback(() => {
    const categories = Object.keys(wordList)
    
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    const word = wordList[category][Math.floor(Math.random() * wordList[category].length)]

    return{word,category}

    
  },[wordList])


  
  const nextStage = useCallback(() => {
     setGameStage(stages[1].name)
    const { word,category } = pickWordandCategory()

    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())
    clearLettersStates()
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

     // console.log(word,category,wordLetters);
  },[pickWordandCategory])

  const verifyLetter = (letter) => {
    console.log(letter);
    

    const normalizedLetter = letter.toLowerCase();

    
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }


  };



  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  
  useEffect(() => {
    if (guesses === 0) {
      
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    
    if (guessedLetters.length === uniqueLetters.length) {
      
      setScore((actualScore) => (actualScore += 100));

      
      nextStage();
    }
  }, [guessedLetters, letters, nextStage]);
  const retry = () => {
    setScore(0)
    setGuesses(guessesNumber)
    setGameStage(stages[0].name);

   
  }

  

  return (
    
    <div>
    <GlobalStyleComponent/>
    {gamestage === 'start' && <StartGame nextStage={nextStage}/>}
    {gamestage === 'game' && <Game 
    verifyLetter={verifyLetter}
    pickedWord={pickedWord}
    pickedCategory={pickedCategory}
    letters={letters}
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    />}
    {gamestage === 'end' && <End score={score} retry={retry}/>}
    </div>
  )
}

export default App
