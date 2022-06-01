import style from "../style/MainPage.css";

const CustomCategoryList = () => {
    const categories = [];
    for(let i = 0; i < 6; i++){
        categories.push(`사용자지정 ${i}`);
    }
    return(
        <div className="MyStyleList">
            {categories.map((category, index) => 
            (<button key={index}>
                <div className="altImg"></div>
                <span>{category}</span>
            </button>))}
        </div>
    );
};

export default CustomCategoryList;