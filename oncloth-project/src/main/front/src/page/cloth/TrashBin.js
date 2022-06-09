import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from "../../base/Header";
import TrashBinClothList from './TrashBinClothList';

const TrashBin = () => {
    const [trashData, setTrashData] = useState([]);
    useEffect(() => {
        axios.get("/api/trashbin/")
        .then(response => {
            console.log(response.data);
            setTrashData(response.data);
        })
        .catch(e => alert(e));
    }, []);
    return(
        <div>
            <Header/>
            <h1>헌옷수거함</h1>
            <TrashBinClothList clothList={trashData}/>
        </div>
    );
};

export default TrashBin;