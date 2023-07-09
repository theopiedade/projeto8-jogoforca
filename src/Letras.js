
export default function Letras (props) {
    console.log("props.letra:"+props.letra);
    return (
        <button>{ props.letra }</button>
    );
}