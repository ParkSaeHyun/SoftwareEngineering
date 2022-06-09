import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Header from "../../base/Header";
import { Route, useParams } from "react-router";
import Button from "../../base/Button";
import { useState } from "react";
import axios from 'axios';
import ClothList from './ClothList';

const CategoryList = () => {
    const detailCategory = ["상의", "하의", "겉옷", "신발", "악세서리"];
    const {season} = useParams();
    const [all, setAll] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [clothList, setClothList] = useState([]);
    const onClink = (e) => {
        setAll(true);
        setFilteredData(itemData.filter((cloth) => cloth.category === e.target.value));
    }
    axios.get(`/api/category/${season}`)
    .then(response => setClothList(response.data))
    .catch(e => alert(e));
    return(
        <>
            <Header mode />
            <ClothList clothList={clothList} />
        </>
    );
};

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      category: '상의',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      category: '상의',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      category: '상의',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      category: '상의',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      category: '상의',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      category: '하의',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      category: '하의',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      category: '하의',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      category: '겉옷',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      category: '겉옷',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      category: '신발',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      category: '악세서리',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        category: '신발',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        category: '신발',
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        category: '악세서리',
      },
  ];

export default CategoryList;