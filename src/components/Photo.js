import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import { changePhoto, removePhoto} from "../store/action";
import {style} from "../styles/PhotoModalStyles";
import FormAddPhoto from "./FormAddPhoto";

const Photo = ({idPhoto,coverUrl, title }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRemovePhoto = () => {
        dispatch(removePhoto(idPhoto));
    }

    const handleChangePhoto = (data) => {

        const newPhoto = {
            id: idPhoto,
            title: data.title,
            url: data.url,
        }
        dispatch(changePhoto(newPhoto));
        handleClose();
    }

    return (
        <Grid item xs={12} md={6} >
            <Card sx={{maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="600"
                    image={coverUrl}
                    alt={title}
                />
                <CardContent>

                    <Typography gutterBottom variant="h6" component="div">
                        <div style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {title}
                        </div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen}> Edit photo </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <FormAddPhoto
                                handleAddPhoto={handleChangePhoto}
                            />
                        </Box>
                    </Modal>
                    <Button  onClick={handleRemovePhoto}>
                        Remove photo
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Photo;