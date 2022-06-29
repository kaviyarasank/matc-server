import "./button.css";

function Button(props){
    return(
        <div>
<button onClick={props.onClick} className="choicesbutton" data-testid={props.testid}>{props.name}</button>
        </div>
    )
}
export default Button;