import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import img from "../../base/소공로고.jpg";
import Logo from "../../base/Logo";

const RegisterPage = () => {
    return(
        <>
            <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>회원가입</h2>
                <form className="loginForm" action="">
                    <input required type="text" id="id" placeholder="아이디"/>
                    <input required type="text" id="nickname" placeholder="닉네임"/>
                    <input required type="password" id="password" placeholder="비밀번호"/>
                    <Button type="submit">회원가입</Button>
                </form>
            </div>
        </div>
        </>
    );
}

export default RegisterPage;