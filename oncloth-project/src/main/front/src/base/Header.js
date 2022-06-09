import React from 'react';
import Button from "./Button";
import logo from "./소공로고.jpg";
import style from "./style/Header.css"
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const Header = ({mode}) => {
    let user = JSON.parse(localStorage.getItem('user'));
    const name = "재석이짱";
    return(
        <div>          
            {user ? 
                <div className="header">
                    <Logo />
                    <form  className="header__Search">
                        <input className="header__searchInput" placeholder="검색어를 입력하세요" required />
                        <Button type="submit">검색</Button> 
                    </form>
                    <div>
                        <span>반갑습니다 {user.usernickname}님!</span>
                        <Link to="/login" ><Button>로그아웃</Button></Link>
                    </div>
                    <div>
                        <Link to="/addcloth"><Button>옷 추가하기</Button></Link>
                        <Link to="/edituser"><Button>회원정보 수정</Button></Link>
                    </div>
                </div> 
             : 
                <div className="header">
                    <Logo />
                    <div>
                        <Link to="/login"><Button>로그인</Button></Link>
                        <Link to="/register"><Button>회원가입</Button></Link>
                    </div>
                </div>
            }
        <hr />
        </div>
    );
};

export default Header;