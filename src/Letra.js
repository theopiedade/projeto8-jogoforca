export default function Letra (props) {
    return(
    <button 
        disabled={props.disabledState} 
        className={props.disabledState? "disabled" : "enabled"}>
        { props.letter }
    </button>

    )
}