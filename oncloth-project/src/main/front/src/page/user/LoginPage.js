import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../../base/Logo";

//로그인 테스트 변경사항
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();


    //로그인 테스트
    const data = {
        userid: "user1",
        userpassword: "1234",
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/login/", JSON.stringify(data),{headers:{
                "Content-Type":"application/json"
            }});
        navigate('/');
    };


    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>로그인</h2>
                <form className="loginForm" onSubmit={onSubmit} action="">
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