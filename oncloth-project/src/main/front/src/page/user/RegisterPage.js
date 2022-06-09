import React from 'react';
import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import img from "../../base/소공로고.jpg";
import Logo from "../../base/Logo";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

const RegisterPage = () => {

    const navigate = useNavigate();
    const [inputId, setInputid] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputNickName, setInputNickName] = useState("");

    const onChangeId = (e) => {
        setInputid(e.target.value);
    }
    const onChangePw = (e) => {
        setInputPw(e.target.value);
    }
    const onChangeNickName = (e) => {
        setInputNickName(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            userid: inputId,
            userpassword: inputPw,
            usernickname: inputNickName
        };
        axios.post("/api/register/", JSON.stringify(data),{headers:{
                "Content-Type":"application/json"
            }});
        alert(`환영합니다! ${data.usernickname}님!`);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
    };


    return(
        <>
            <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>회원가입</h2>
                <form className="loginForm" onSubmit={onSubmit} action="">
                    <input required value={inputId} onChange={onChangeId} type="text" id="id" placeholder="아이디"/>
                    <input required value={inputNickName} onChange={onChangeNickName} type="text" id="nickname" placeholder="닉네임"/>
                    <input required value={inputPw} onChange={onChangePw} type="password" id="password" placeholder="비밀번호"/>
                    <Button type="submit">회원가입</Button>
                </form>
            </div>
        </div>
        </>
    );
}

export default RegisterPage;