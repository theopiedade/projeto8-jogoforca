import "../src/css/style.css"
import palavras from "./palavras";
import Letras from "./Letras";
import { useState } from "react";

const img = [
  "forca0.png", "forca1.png", "forca2.png", "forca3.png", 
  "forca4.png", "forca5.png", "forca6.png"
]

const alfabeto = [
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z"
]

function App() {
  const [disabledState, setDisabledState] = useState(true);
  const [gameState, stateGameState] = useState("waiting");
  const [gameCount, setgameCount] = useState(0);
  const [gameImg, setGameImg] = useState(img[0]);
  const [word, setWord] = useState("");

  function GameStart() {
    setDisabledState(false);
    stateGameState("playing");
    setgameCount(0);
    setGameImg(img[0]);
    setWord(SortWord());
  }

  function SortWord() {
    const num = Math.floor(Math.random() * palavras.length);
    return palavras[num];
  }
    console.log("Palavra:"+word);
    console.log("gameState:"+gameState);
    return (
      <div className="container">
        <div className="containerForkButtonWord">
          <img src={`/assets/img/`+gameImg}/>
          <div className="containerButtonWord">
            <button onClick={() => GameStart()}>Escolher palavra</button>
            <div className="containerWord">_ _ _ _ _ _ _ _ _ _</div>
          </div>
        </div>
        <div className="containerWords">
          {
        alfabeto.map( letra => 
                  <Letras key={letra} letra={letra} state={disabledState} />
              )
          }
        </div>
      </div>
    );

}

export default App;
