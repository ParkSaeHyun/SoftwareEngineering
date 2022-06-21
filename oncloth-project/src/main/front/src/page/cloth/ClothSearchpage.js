import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../base/Header';
import ClothList from './ClothList';

const ClothSearchPage = () => {
    const {name} = useParams();
    const [clothlist, setClothlist] = useState([]);
    axios.get(`/api/search/${name}`)
    .then(response => setClothlist(response.data))
    .catch(e => alert(e))
    return(
        <div>
            <Header />
            <ClothList clothList={clothlist} />
        </div>
    )
};

export default ClothSearchPage;