import React, { useState } from 'react';
import Button from "./Button";
import "./style/Header.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import Logo from "./Logo";

const Header = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()
    const [search, setSearch] = useState("");
    const onClickLogout = () => {
        localStorage.removeItem('user');
    };
    const onChangeInput = (e) => {
        setSearch(e.target.value);
    }
    const onSearch = (e) => {
        e.preventDefault();
        navigate(`/searchcloth/${search}`);
    }
    return(
        <div>          
            {user ? 
                <div className="header">
                    <Logo />
                    <form onSubmit={onSearch} className="header__Search">
                        <input onChange={onChangeInput} value ={search} className="header__searchInput" placeholder="검색어를 입력하세요" required />
                        <Button type="submit">검색</Button> 
                    </form>
                    <div>
                        <span>반갑습니다 {user.usernickname}님!</span>
                        <Link to="/login" ><Button onClick={onClickLogout}>로그아웃</Button></Link>
                    </div>
                    <div>
                        <Link to="/addcloth"><Button>옷 추가하기</Button></Link>
                        <Link to="/edituser"><Button>회원정보 수정</Button></Link>
                        <Link to ="/trashbin"><Button>헌옷수거함</Button></Link>
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