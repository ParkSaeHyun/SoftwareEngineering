import React from 'react';
import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../../base/Logo";

//로그인 테스트 변경사항
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate();

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    const onChangePw = (e) => {
        setInputPw(e.target.value);
    }

    //로그인 테스트

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            userid: inputId,
            userpassword: inputPw
        };

        axios.post("/api/login/", data,{headers:{
                "Content-Type":"application/json"
            }}).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                alert(`환영합니다!`);
                navigate("/");
                window.location.reload();
            }).catch(e => alert(`${e}의 오류가 발생했습니다.`));
    };


    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>로그인</h2>
                <form className="loginForm" onSubmit={onSubmit} action="">
                    <input required value={inputId} onChange={onChangeId} type="text" id="" placeholder="아이디"/>
                    <input required value={inputPw} onChange={onChangePw} type="password" placeholder="비밀번호"/>
                    <Button type="submit">로그인하기</Button>
                    <Link to="/findmypw" style={{"textAlign": "right", "fontSize": "0.725rem"}}>비밀번호 찾기</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;