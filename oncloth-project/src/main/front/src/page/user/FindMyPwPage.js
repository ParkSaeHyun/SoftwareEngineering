import React from 'react';
import { Link } from "react-router-dom";
import Button from "../../base/Button";
import Logo from "../../base/Logo";

const FindMyPwPage = () => {
    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>비밀번호 찾기</h2>
                <form className="loginForm" action="">
                    <input required type="text" id="" placeholder="아이디"/>
                    <input required type="text" placeholder="닉네임"/>
                    <Button type="submit">비밀번호 찾기</Button>
                    <Link to="/login" style={{"textAlign": "right", "fontSize": "0.725rem"}}>로그인</Link>
                </form>
            </div>
        </div>
    );
};

export default FindMyPwPage;