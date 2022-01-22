import React from 'react';
import FormAddPhoto from "./FormAddPhoto";
import {useDispatch, useSelector} from "react-redux";
import {addPhoto} from "../store/action";

const AddPhoto = (props) => {

    const {listPhoto} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChangeContentPhoto = (data) => {
        console.log(data);
        const newPhoto = {
            id: listPhoto.length+1,
            title: data.title,
            url: data.url,
        }
       dispatch(addPhoto(newPhoto));
        props.handleClose();
    }

    return (
        <div >
            Add photo
            <FormAddPhoto
                handleAddPhoto={handleChangeContentPhoto}
            />
        </div>
    );
};

export default AddPhoto;