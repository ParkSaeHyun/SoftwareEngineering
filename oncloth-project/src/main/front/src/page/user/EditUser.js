import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../../base/Logo";
const EditUserPage = () => {
    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>회원정보수정</h2>
                <form className="loginForm" action="">
                    <input required type="text" id="" placeholder="닉네임"/>
                    <input required type="password" placeholder="비밀번호"/>
                    <Button type="submit">회원정보 수정하기</Button>
                </form>
            </div>
        </div>
    );
};

export default EditUserPage;