export const CHANGE_LIST_PHOTO ='CHANGE_LIST_PHOTO';
export const  ADD_PHOTO ='ADD_PHOTO';
export const  REMOVE_PHOTO ='REMOVE_PHOTO';
export const  CHANGE_PHOTO ='CHANGE_PHOTO';


export const addPhoto = (photo) => (
    {
        type: ADD_PHOTO,
        payload: photo
    }
);
export const changePhoto = (photo) => (
    {
        type: CHANGE_PHOTO,
        payload: photo
    }
);
export const changeListPhoto = (listPhoto) => (
    {
        type: CHANGE_LIST_PHOTO,
        payload: listPhoto
    }
);
export const removePhoto = (idPhoto) => (
    {
        type: REMOVE_PHOTO,
        payload: idPhoto
    }
);

export const getChangePhotoAlbum = (album, setAlbum, setHasMore )=> {
    return (dispatch) => {
        const list = [];
        let photo;
        fetch(`https://jsonplaceholder.typicode.com/albums/${album}/photos`)
            .then(response => response.json())
            .then(data => {
                data.map(item => {
                    photo = {
                        id: item.id,
                        title: item.title,
                        url: item.url
                    };
                    list.push(photo);
                })
                if (album < 100) {
                    setAlbum(album + 1)
                    if (album === 100)
                        setHasMore(false)
                }

                dispatch(changeListPhoto(list));
            })
            .catch(e => {
                console.log(e);
            });

    }
}
