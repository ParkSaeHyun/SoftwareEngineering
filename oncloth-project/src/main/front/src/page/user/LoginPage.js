import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../../base/Logo";
const LoginPage = () => {
    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>로그인</h2>
                <form className="loginForm" action="">
                    <input required type="text" id="" placeholder="아이디"/>
                    <input required type="password" placeholder="비밀번호"/>
                    <Button type="submit">로그인하기</Button>
                    <Link to="/findmypw" style={{"textAlign": "right", "fontSize": "0.725rem"}}>비밀번호 찾기</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;