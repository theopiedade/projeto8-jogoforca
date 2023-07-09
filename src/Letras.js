
export default function Letras (props) {
    return (
        <button disabled={props.state}>{ props.letra }</button>
    );
}