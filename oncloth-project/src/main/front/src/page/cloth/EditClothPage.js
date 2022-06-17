import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EditCloth from "./EditCloth";

const EditClothPage = () => {
    const [cloth, setCloth] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`/api/cloth/read/${id}`)
        .then(response => {
            console.log(response);
            setCloth(response);
        })
        .catch(e => alert(e));
    }, []);
    return(
        <EditCloth cloth={cloth} id ={id}/>
    );
};

export default EditClothPage;