import Button from "../../base/Button";
import style from "../style/LoginPage.css";
import img from "../../base/소공로고.jpg";
import Logo from "../../base/Logo";
import axios from "axios";
import { useNavigate } from "react-router";

const RegisterPage = () => {

    // const url = "/api/register";
    // const sendParam = {
    //     userid: "asdsad",
    //     userpassword: "zxc",
    //     usernickname: "asd"
    // }
    //
    // axios.post(url, sendParam)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((error) => {
    //         console.log(error.response)
    //     })


    const navigate = useNavigate();
    const data = {
        userid: "asdsad",
        userpassword: "zxc",
        usernickname: "asd"
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/register/", JSON.stringify(data),{headers:{
                "Content-Type":"application/json"
            }});
        navigate('/');
    };


    return(
        <>
            <div className="loginBlock">
            <div className="whiteBox">
                <Logo />
                <h2>회원가입</h2>
                <form className="loginForm" onSubmit={onSubmit} action="">
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