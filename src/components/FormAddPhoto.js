import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {ErrorBlock} from "../styles/ErrorStyles";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../utils/constants";
import {searchPhoto} from "../store/action";
import {styleBottom, styleRight} from "../styles/PhotoModalStyles";


const FormAddPhoto = ({handleAddPhoto}) => {
    const {listPhoto} = useSelector(state => state);
    const [isValidUrl, setIsValidUrl] = useState(false);
    const [isValidTitle, setIsValidTitle] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur"
    });
    const inputProps = {
        margin: '20px',
    };

    const onSubmit = (data) => {
        // let indexUrl = listPhoto.findIndex(item => item.url === data.url);
        if (listPhoto.include(item => item.url === data.url)) setIsValidUrl(true);
        // let indexTitle = listPhoto.findIndex(item => item.title === data.title);
        if (listPhoto.include(item => item.title === data.title)) setIsValidTitle(true);
        if (listPhoto.include(item => item.title === data.title) && listPhoto.include(item => item.url === data.url)) {
            handleAddPhoto(data);
            setIsValidUrl(false);
            setIsValidTitle(false);
        };
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={styleBottom}>
                    <TextField
                        {...register("url")}
                        fullWidth label='URL'
                        placeholder="Enter url"
                        color="secondary"
                        inputProps={inputProps}
                    />
                </div>
                <TextField
                    {...register('title')}
                    fullWidth label='Title'
                    placeholder="Enter title"
                    color="secondary"
                    inputProps={inputProps}
                />
                <ErrorBlock>{errors?.url && <p>{errors?.url?.message || "Error!"}</p>}</ErrorBlock>
                <ErrorBlock>{isValidUrl || isValidTitle? <p>This photo is already in the album</p> : <p></p>}</ErrorBlock>

                <Button type='submit'
                        variant='contained'
                        color='primary'
                > Save </Button>

                <div style={styleRight}>
                    <Button type='submit'
                            onClick={() => reset()}
                            variant='contained'
                            color='primary'
                    > Cancel </Button>
                </div>
            </form>
        </div>
    );
};

export default FormAddPhoto;