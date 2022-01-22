import {ADD_PHOTO, CHANGE_LIST_PHOTO, CHANGE_PHOTO, MESSAGE, REMOVE_PHOTO} from "./action";

export const initialState = {
    listPhoto: [],
    message: ''

};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            const list = [...state.listPhoto];
            list.push(action.payload)
            return {...state, listPhoto: list};

        case CHANGE_PHOTO:
            const listChange = [...state.listPhoto];
            let indexChange = listChange.findIndex(item => item.id === +action.payload.id);
            listChange.splice(indexChange, 1, action.payload);
            return {...state, listPhoto: listChange};

        case CHANGE_LIST_PHOTO:
            return {...state, listPhoto: [...state.listPhoto, ...action.payload]};

        case REMOVE_PHOTO:
            const listR = [...state.listPhoto];
            let index = listR.findIndex(item => item.id === +action.payload);
            listR.splice(index, 1);
            return {...state, listPhoto: listR};

        default:
            return state;
    }
}
