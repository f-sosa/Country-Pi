import { GET_COUNTRIES, REMOVE_FAV, FILTER, ORDER } from "./types";
const initialState = {
    countries: [],
    countriesFilter: []
};
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload};

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