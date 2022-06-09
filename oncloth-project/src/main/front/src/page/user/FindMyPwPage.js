import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "../../base/Button";
import Logo from "../../base/Logo";
import { useNavigate } from "react-router";

const FindMyPwPage = () => {
    const [userid, setUserid] = useState("");
    const [usernickname, setUsernickname] = useState("");
    const navigate = useNavigate();

    const onChangeId = (e) => {
        setUserid(e.target.value);
    }

    const onChangeninckname = (e) => {
        setUsernickname(e.target.value);
    }

    const onSubmitFindMyPw = (e) => {
        e.preventDefault();
        const data = {
            userid: userid,
            usernickname: usernickname
        };
        axios.post("/api/findmypw/", 
                    data,{headers:{
                        "Content-Type":"application/json"
                    }}).then(response => {
                        alert(`비밀번호는 ${response.data}`);
                        navigate("/");
                })
                    .catch(e => alert(e));
    }
    return(
        <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>비밀번호 찾기</h2>
                <form onSubmit={onSubmitFindMyPw} className="loginForm" action="">
                    <input required onChange={onChangeId} value={userid} type="text" id="" placeholder="아이디"/>
                    <input required onChange={onChangeninckname} value={usernickname} type="text" placeholder="닉네임"/>
                    <Button type="submit">비밀번호 찾기</Button>
                    <Link to="/login" style={{"textAlign": "right", "fontSize": "0.725rem"}}>로그인</Link>
                </form>
            </div>
        </div>
    );
};

export default FindMyPwPage;