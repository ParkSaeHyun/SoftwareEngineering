import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '../../base/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';
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

const ClothList = ({clothList}) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [clothData, setClothData] = useState({});
    const handleOpen = (e, cloth) => {
      setOpen(true);
      setClothData(cloth);
    };
    const handleClose = () => setOpen(false);
    const onClickGoToTrashBin = () => {
      axios.get(`/api/cloth/delete/${clothData.id}`)
      .then(response => {
        console.log(response);
        alert("헌옷수거함으로 이동되었습니다");
        navigate("/trashbin");
      })
      .catch(e => console.log(e));
    };
    return(
        <>
          {clothList.map(cloth => (
            <div>
              <img onClick={(e) => handleOpen(e, cloth)} src={cloth.imagepath} alt={cloth.imagename} />
            </div>
          ))}
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
                    <h2>{clothData.description}</h2>
                    <img src={clothData.imagepath} alt={clothData.imagename} />
                    <span>{clothData.location}</span>
                    <div>
                      <Link to={`/editcloth/${clothData.id}`}><Button>수정하기</Button></Link> 
                      <Button onClick={onClickGoToTrashBin}>삭제하기</Button>
                    </div>
                </Box>
              </Modal>
        </>
    );
};

export default ClothList;