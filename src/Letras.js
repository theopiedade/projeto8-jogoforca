
export default function Letras ({key, letter, disabledState, 
    setDisabledState, lettersSelected,setLettersSelected}) {

    function letterSelect(props) {
        
    }

    return (
        <button onClick={letterSelect(letter)} disabled={disabledState} className={disabledState ? "disabled" : "enabled"}>{ props.letra }</button>
    );
}