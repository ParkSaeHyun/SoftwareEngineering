import React, { useEffect, useState } from 'react';
import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import { Link } from "react-router-dom";
import Logo from "../../base/Logo";
import axios from 'axios';
const EditUserPage = () => {
    const [userid, setUserid] = useState("");
    const [usernickname, setUsernickname] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const onChangeNickname = (e) => {
        setUsernickname(e.target.value);
    };

    const onChangePassword = (e) => {
        setUserpassword(e.target.value);
    };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserid(user.userid);
        setUsernickname(user.usernickname);
        setUserpassword(user.userpassword);
    }, []);

    const onSubmitEditUser = (e) => {
        e.preventDefault();
        axios.post(`/api/editUser/${userid}`, 
            {usernickname: usernickname,
            userpassword: userpassword
            }
            ,{headers:{
            "Content-Type":"application/json"
        }}).then(response => console.log(response)).catch(e => alert(e));
    }
    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>회원정보수정</h2>
                <form onSubmit={onSubmitEditUser} className="loginForm" action="">
                    <input value={usernickname} onChange={onChangeNickname} type="text" id="" placeholder="닉네임"/>
                    <input value={userpassword} onChange={onChangePassword} type="password" placeholder="비밀번호"/>
                    <Button type="submit">회원정보 수정하기</Button>
                </form>
            </div>
        </div>
    );
};

export default EditUserPage;