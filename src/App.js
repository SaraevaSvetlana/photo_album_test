import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getChangePhotoAlbum} from "./store/action";
import Photo from "./components/Photo";
import {Grid} from "@mui/material";
import ButtonAddPhoto from "./components/ButtonAddPhoto";
import InfiniteScroll from "react-infinite-scroll-component";
import {style} from "./styles/ButtonsModalStyles";


function App() {
    const {listPhoto} = useSelector(state => state);
    const [hasMore, setHasMore] = useState(true);
    const [album, setAlbum] = useState(1);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getChangePhotoAlbum(album, setAlbum, setHasMore));
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        < >
            <h1 style={style}>Album</h1>
            <ButtonAddPhoto/>
            <InfiniteScroll
                dataLength={listPhoto.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Grid container spacing={2}>

                    {listPhoto.map((item, index) =>
                        <Photo
                            idPhoto={item.id}
                            title={item.title}
                            coverUrl={item.url}
                            key={`id#${index}`}
                        />
                    )}

                </Grid>
            </InfiniteScroll>
        </>
    );
}

export default App;
