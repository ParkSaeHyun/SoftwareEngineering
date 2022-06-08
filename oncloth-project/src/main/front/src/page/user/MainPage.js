import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../base/Header";
import CustomCategoryList from "../cloth/CustomCategoryList";
import style from "../style/MainPage.css"

const MainPage = () => {
    const mode = true;
    const categoty = [];
    for(let i = 0; i < 6; i++){
        categoty.push(`사용자지정 ${i}`);
    }
    return(
        <div>
            {mode ? //로그인 상태
                <div>
                    <Header mode={mode} />
                    <div className="mainWeather">
                        <Link to="/spring"><button>봄</button></Link>
                        <Link to="/summer"><button>여름</button></Link>
                        <Link to="/autumn"><button>가을</button></Link>
                        <Link to="/winter"><button>겨울</button></Link>
                    </div>
                    <CustomCategoryList />
                </div>
                : //로그아웃 상태
                <div>
                    <Header mode={mode} />
                    <h2 style={{'textAlign': 'center', 'fontSize': '2.5rem'}}>우리는 ON CLOTH입니다.</h2>
                    <main className="unloginIntro">
                        <article className="unloginIntro_">
                            <p className="articleHead">ON CLOTH란?</p>
                            <hr/>
                            <p>우리 회사는 킹왕짱 쩌는 의류관리 서비스입니다. 
                                우리 회사가 제공하는 기능을 통해 여러분은
                                더 편리한 생활을 누릴 수 있다 자부합니다.
                                ON CLOTH와 함께 새로운 삶을 경험해보세요!
                            </p>
                        </article>
                        <article className="unloginFunction">
                            <p className="articleHead">무엇을 할 수 있나요?</p>
                            <hr/>
                            <p>
                                우리는 다음 기능이 가능합니다
                                <ul>
                                    <li>의류 기록하기</li>
                                    <li>나만의 스타일리스트 만들기</li>
                                    <li>어디에 의류가 있는지 저장하기</li>
                                </ul>
                            </p>
                        </article>
                    </main>
                </div>
            }
        </div>
    );
};

export default MainPage;