import style from "./style/Button.css";

const Button = ({children, type, onClick, value}) => {
    return(
        <button onClick={onClick} value={value} className="baseButton" type={type}>{children}</button>
    );

}

export default Button;