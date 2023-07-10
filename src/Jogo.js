import { useState } from "react";
import palavras from "./palavras";

const img = [
    "forca0.png", "forca1.png", "forca2.png", "forca3.png", 
    "forca4.png", "forca5.png", "forca6.png"
  ]

export default function Jogo({gameState, setGameState, gameCount, setGameCount,word, setWord,
    wordArray, setWordArray,wordArrayUnderlined, setWordArrayUnderlined, 
    disabledState, setDisabledState, gameImg, setGameImg}) {

  
   
    function GameStart() {
        SelectWord();
        setGameCount(0);
        setGameImg(img[0]);
        setGameState("init");
        setDisabledState(false);
      }
    
      function SelectWord() {
        const num = Math.floor(Math.random() * palavras.length);
        const wordSelected = palavras[num].toUpperCase();
        console.log("Palavra = "+wordSelected);
    
        const array1 = wordSelected.split('');
        setWordArray(array1);
    
        const array2 = [];
        array1.map( letra => array2.push('_') );
        setWordArrayUnderlined(array2);
    
        setWord(wordSelected);
      }

      return (
        <div className="containerForkButtonWord">
          <img src={`/assets/img/`+img[gameCount]}/>
          <div className="containerButtonWord">
            <button onClick={() => GameStart()}>Escolher palavra</button>
            <div className="containerWord">
              {
                wordArrayUnderlined.map(letra => letra+" ")
              }
            
            </div>
          </div>
        </div>
      )

}