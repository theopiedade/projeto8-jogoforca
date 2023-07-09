import "../src/css/style.css"
import palavras from "./palavras";
import Letras from "./Letras";
import { useState } from "react";

const alfabeto = [
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z"
]

function App() {
  const [disabledState, setDisabledState] = useState("true");
  return (
    <div className="container">
      <div className="containerForkAndButton">
        <img src="/assets/forca0.png"/>
        <button>Escolher palavra</button>
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
