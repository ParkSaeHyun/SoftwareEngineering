import Button from "./Button";
import logo from "./소공로고.jpg";
import style from "./style/Header.css"
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = ({mode}) => {
    const name = "재석이짱";
    return(
        <div>          
            {mode ? //mode가 true이면(로그인 상태이면) 검색창과 회원정보 출력, false이면(로그아웃 상태이면) 로그인 회원가입 버튼 출력
                <div className="header">
                    <Logo />
                    <form className="header__Search">
                        <input className="header__searchInput" placeholder="검색어를 입력하세요" required />
                        <Button type="submit">검색</Button> 
                    </form>
                    <div>
                        <span>반갑습니다 {name}님!</span>
                        <Link to="/login" ><Button>로그아웃</Button></Link>
                    </div>
                    <div>
                        <Link to="/editcloth"><Button>옷 추가하기</Button></Link>
                        <Link to="/edituser"><Button>회원정보 수정</Button></Link>
                    </div>
                </div> 
             : //여기부터 로그아웃 상태
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