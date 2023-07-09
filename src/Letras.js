
export default function Letras (props) {
    return (
        <button disabled={props.state} className={props.state ? "disabled" : "enabled"}>{ props.letra }</button>
    );
}