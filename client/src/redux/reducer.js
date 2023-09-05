import { GET_COUNTRIES, GET_NAME, FILTER, ORDER } from "./types";
const initialState = {
    countries: [],
    countriesFilter: []
};
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload, countriesFilter: action.payload};

        case GET_NAME:
            return{...state, countriesFilter: action.payload};
        case FILTER:

            return
        case ORDER:
                return;
        default:
            return { ...state };

    }


};

export default rootReducer;