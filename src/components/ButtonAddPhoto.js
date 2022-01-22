import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import AddPhoto from "./AddPhoto";
import {style} from "../styles/PhotoModalStyles";




const ButtonAddPhoto = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        < >
            <Button onClick={handleOpen}>Add photo</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddPhoto
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>

        </>
    );
};

export default ButtonAddPhoto;