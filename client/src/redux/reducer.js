import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
const initialState = {
    myFavorites: [],
    allCharacters: [],
};
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FAV:
            return;
        case REMOVE_FAV:
            return;
        case FILTER:

            return
        case ORDER:
                return;
        default:
            return { ...state };

    }


};

export default rootReducer;