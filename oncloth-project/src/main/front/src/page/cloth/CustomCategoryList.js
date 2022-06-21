import React from 'react';
import { useState, useEffect } from "react";
import Button from "../../base/Button";
import style from "../style/MainPage.css";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const styled = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid rgba(0,0,0,0.4)',
    boxShadow: 24,
    p: 4,
};

const CustomCategoryList = () => {
    const [CustomCategories, setCustomCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("/api/customcategory/list/")
        .then(response => {
            console.log(response);
            setCustomCategories(response.data);
            console.log(CustomCategories);
        })
        .catch(e => alert(e));
    }, [])
    const [newCustomCategory, setNewCustomCategory] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onChangeNewCustomCategory = (e) => {
        setNewCustomCategory(e.target.value);
    }
    const onSubmitNewCustomCategory = (e) => {
        e.preventDefault();
        const data = {
            name: newCustomCategory
        };
        axios.post("/api/customcategory/create/", data)
        .then(response => {
            alert("카테고리가 생성되었습니다!");
            window.location.reload();
        })
        .catch(e => alert(e));

    }
    return (
        <div style={{"margin": "1rem 5rem"}}>
            <Button onClick={handleOpen} style={{"margin-left": "5rem"}}>my style 생성</Button>
            <div className="MyStyleList">
                {CustomCategories.map((category, index) => 
                (<Link to={`/customcategory/${category.id}`}><button key={index}>
                    <div className="altImg"></div>
                    <span>{category.name}</span>
                </button></Link>))}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styled}>
                    <input value={newCustomCategory} onChange={onChangeNewCustomCategory} type="text" placeholder="카테고리 이름을 입력해주세요"/>
                    <Button onClick={onSubmitNewCustomCategory}>저장</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default CustomCategoryList;