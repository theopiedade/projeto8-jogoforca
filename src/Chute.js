import { useState } from "react";

export default function Chute ({gameState, setGameState,
    setWordArrayUnderlined, setGameCount, word, wordArray}) {

    const[knowWord,setKnowWord] = useState("");

    function iKnowTheWhord() {
        if (knowWord.toUpperCase() === word) {
            setGameState("Win");
        }
        else {
            setGameState("Game Over");
            setWordArrayUnderlined(wordArray);
            setGameCount(6);
        }
    }
 
 if (gameState === "Playing")
 return (
    <div className="bonus">
        <h1>Já sei a palavra</h1> 
        <input data-test="guess-input" type="text" onChange={e => setKnowWord(e.target.value)}></input>
        <button data-test="guess-button" onClick={() => iKnowTheWhord()}>Chutar</button>
    </div>
 )
}