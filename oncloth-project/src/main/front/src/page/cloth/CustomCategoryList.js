import { useState } from "react";
import Button from "../../base/Button";
import style from "../style/MainPage.css";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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
    const categories = [];
    for(let i = 0; i < 6; i++){
        categories.push(`사용자지정 ${i}`);
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={{"margin": "1rem 5rem"}}>
            <Button onClick={handleOpen} style={{"margin-left": "5rem"}}>my style 생성</Button>
            <div className="MyStyleList">
                {categories.map((category, index) => 
                (<button key={index}>
                    <div className="altImg"></div>
                    <span>{category}</span>
                </button>))}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styled}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        새로운 창입니다.
                    </Typography> */}
                    <input type="text" placeholder="카테고리 이름을 입력"/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default CustomCategoryList;