import style from "./style/Button.css"

const Button = ({children, type}) => {
    return(
        <button className="baseButton" type={type}>{children}</button>
    );

}

export default Button;