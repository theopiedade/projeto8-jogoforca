import "../src/css/style.css"
import Letras from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";

function App() {
  
  const [gameState, setGameState] = useState("waiting");
  const [gameCount, setGameCount] = useState(0);
  const [word, setWord] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const [wordArrayUnderlined, setWordArrayUnderlined] = useState([]);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [disabledState, setDisabledState] = useState(true);
  const [gameImg, setGameImg] = useState(0);


    return (
      <div className="container">
        <Jogo 
          gameState={gameState} setGameState={setGameState}
          gameCount={gameCount} setGameCount={setGameCount} 
          word={word} setWord={setWord}
          wordArray={wordArray} setWordArray={setWordArray}
          wordArrayUnderlined={wordArrayUnderlined} 
          setWordArrayUnderlined={setWordArrayUnderlined}
          disabledState={disabledState} setDisabledState={setDisabledState}
          gameImg={gameImg} setGameImg={setGameImg} lettersSelected={lettersSelected}
          setLettersSelected={setLettersSelected}
        />
        <Letras gameState={gameState} setGameState={setGameState} 
          gameCount={gameCount} setGameCount={setGameCount}
          wordArray={wordArray} setWordArray={setWordArray}
          wordArrayUnderlined={wordArrayUnderlined} setWordArrayUnderlined={setWordArrayUnderlined}
          lettersSelected={lettersSelected} setLettersSelected={setLettersSelected}
          disabledState={disabledState} setDisabledState={setDisabledState}
          setGameImg={setGameImg} word={word}
        />
      </div>
    );

}

export default App;
