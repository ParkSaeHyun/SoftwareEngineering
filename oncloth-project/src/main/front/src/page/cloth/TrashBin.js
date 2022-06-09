import axios from 'axios';
import React, { useEffect } from 'react';
import Header from "../../base/Header";

const TrashBin = () => {
    useEffect(() => {
        axios.get("/api/trashbin/")
        .then(response => console.log(response))
        .catch(e => alert(e));
    }, []);
    return(
        <div>
            <Header/>

        </div>
    );
};

export default TrashBin;