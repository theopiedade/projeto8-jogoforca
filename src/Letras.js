
export default function Letras (props) {
    console.log("props.letra:"+props.letra);
    return (
        <button disabled={props.state}>{ props.letra }</button>
    );
}