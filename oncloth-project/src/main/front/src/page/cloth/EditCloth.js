import Button from "../../base/Button";
import logo from "../../base/소공로고.jpg";
import {useState} from "react";
import {Link} from "react-router-dom"
import style from "../style/EditCloth.css";
import TextField from '@mui/material/TextField';
import axios from "axios";

const EditCloth = ({edit, cloth}) => {
    const customCategory = ["1", "2", "3", "4"];
    const [inputImg, setInputImg] = useState(''); //미리보기
    const [imgFile, setImgFile] = useState(null); //이미지
    const encodeFileToBase64 = (e, fileBlob) => {
        const reader = new FileReader();
        setImgFile(e.target.files)
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) =>{
            reader.onload= () => {
                setInputImg(reader.result);
                resolve();
            }
        })
    }

    const onSubmitCloth = async() => {
        const fd = new FormData();
        Object.values(imgFile).forEach((file) => fd.append("file", file));

        await axios.post('http://localhost:8110/test/WriteBoard.do', fd, {
            headers: {
            "Content-Type": `multipart/form-data; `,
  }
})
    }
    return(
        <div className="addCloth">
            <main className="addClothBox">
                <header className="addClothHeader">
                    <Link to = "/"><img src={logo} alt="logo" /></Link>
                    {true ?
                    <h1 >옷 추가하기</h1>:
                    <h1>옷 편집하기</h1> 
                    }
                </header>
                <form onSubmit={onSubmitCloth} className="addClothForm">
                    <div className="addClothFormInput">
                        <div className="addClothFormLeft">
                            <div style={{"display": "flex"}} className="imgPreview">
                                {inputImg?
                                    <img style={{"height": "20rem"}} src={inputImg} alt="imgpreview" />
                                    :
                                    <div style={{"height": "10rem", 
                                                "backgroundColor": "beige", 
                                                "display": "flex", 
                                                "justifyContent": "center",
                                                "alignItems": "center",
                                                "fontWeight": 600,
                                                "width": "100%"}}>이미지 미리보기</div>}
                            </div>
                            <input type="file" id="file" multiple="multiple" placeholder="" onChange={(e) => encodeFileToBase64(e, e.target.files[0])}/>
                            <div>
                                <select className="addClothSelect" name="" id="">
                                    <option value="봄">봄</option>
                                    <option value="여름">여름</option>
                                    <option value="가을">가을</option>
                                    <option value="겨울">겨울</option>
                                </select>
                                <select className="addClothSelect" name="" id="">
                                    <option value="상의">상의</option>
                                    <option value="하의">하의</option>
                                    <option value="겉옷">겉옷</option>
                                    <option value="신발">신발</option>
                                    <option value="악세서리">악세서리</option>
                                </select>
                            </div>
                        </div>
                        <div className="addClothFormRight">
                            <input type="text" placeholder="옷 이름을 입력해주세요"/>
                            <textarea name="" id="" cols="20" rows="10" placeholder="상세정보를 입력해주세요"></textarea>
                            <select className="addClothSelect" name="" id="">
                                <option value="">--개인카테고리 선택--</option>
                                {customCategory.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="addClothFormButton">
                        <Button type="submit">제출</Button>
                        <Link to = "/"><Button>취소</Button></Link>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default EditCloth;