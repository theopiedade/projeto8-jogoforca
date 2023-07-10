import { useState } from "react";

const alfabet = [
    "A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"
]
let lSelected = [];

export default function Letras ({gameState, setGameState, gameCount, setGameCount, wordArray, setWordArray,
    wordArrayUnderlined, setWordArrayUnderlined, lettersSelected, setLettersSelected, 
    disabledState, setDisabledState, setGameImg, word}) {
    
    console.log("lettersSelected: "+lettersSelected);
    

    function letterSelected (props) {
        if (lettersSelected.indexOf(props) > 0) return true;
        else return false;
    }
    
    function letterSelect(props) {
        console.log("Clicou e count ="+gameCount);
        setLettersSelected([...lettersSelected, props]);
        let array = [...wordArrayUnderlined];
        
        if (word.indexOf(props) < 0 && gameCount < 8) {
          if ((gameCount+1) == 6) { 
            setGameState("Game Over");
            setWordArrayUnderlined(wordArray);
            setGameCount(6);
          }
          else setGameCount(gameCount+1);
        }
        else if (gameCount < 7) {    
            wordArray.map((l, i) => {
                if (l == props) {
                  array.splice(i, 1, props);
                }           
            })
            if (array.toString() === wordArray.toString()) { 
                setGameState("Win");
            }
            console.log("word = "+word);
            setWordArrayUnderlined(array);
        } 
        
    }

    if (gameState == "Playing") 
    return (
        <div className="containerWords">
            {
          alfabet.map( letter => 
                <button
                    key={letter} onClick={() => letterSelected(letter) ? "" : letterSelect(letter)}
                    disabled={letterSelected(letter)} 
                    className={letterSelected(letter) ? "disabled" : "enabled"}>
                    { letter }
                </button>
             )
            }
        </div>
    );

    if (gameState != "Playing")
    return (
        <div className="containerWords">
            {
          alfabet.map( letter => 
                <button
                    key={letter}
                    disabled={true} 
                    className={"disabled"}>
                    { letter }
                </button>
             )
            }
        </div>
    );
}