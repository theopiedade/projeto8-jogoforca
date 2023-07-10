import { useState } from "react";
import Letra from "./Letra";

const alfabet = [
    "A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"
]


export default function Letras ({gameState, setGameState, gameCount, setGameCount, wordArray, setWordArray,
    wordArrayUnderlined, setWordArrayUnderlined, lettersSelected, setLettersSelected, 
    disabledState, setDisabledState, setGameImg, word}) {
   
    
    
    
    function letterSelect(props) {
        console.log("Letra: "+props);
        console.log("indexOf(props)"+props)
        if (word.indexOf(props) < 0) {
          setGameCount(gameCount+1);
        }
        else if (gameCount < 7) {    
            const arrayLetters = [...lettersSelected];
            arrayLetters.push(props);
            console.log("arrayLetters"+arrayLetters);
            setLettersSelected(arrayLetters);
            wordArray.map((l, i) => {

                if (l == props) {
                  console.log("Tem na palavra letra "+l);
                  let array = [...wordArrayUnderlined];
                  console.log("array "+array);
                  array.splice(i, 1, props);
                  console.log("array modif "+array);
                  setWordArrayUnderlined(array);
                }
                   
            })
        }
    }

    return (
        <div className="containerWords">
            {
          alfabet.map( letter => 
                <button
                    key={letter} onClick={() => letterSelect(letter)}
                    disabled={disabledState} 
                    className={disabledState? "disabled" : "enabled"}>
                    { letter }
                </button>
             )
            }
        </div>
    );
}