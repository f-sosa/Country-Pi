import { GET_COUNTRIES, GET_NAME, FILTER, ORDER, POBLATION } from "./types";
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
            if (action.payload == "A") {
                return {
                    ...state,
                    countriesFilter: [...state.countriesFilter].sort((a, b) =>
                      a.name.localeCompare(b.name)
                    )
                  };
            } else {
                return {
                    ...state,
                    countriesFilter: [...state.countriesFilter].sort((a, b) =>
                      b.name.localeCompare(a.name)
                    )
                  };
            }
            case POBLATION:
            if (action.payload == "M") {
                return {
                    ...state,
                    countriesFilter: [...state.countriesFilter].sort(
                      (a, b) => b.population - a.population
                    )
                  };
            } else {
                return {
                    ...state,
                    countriesFilter: [...state.countriesFilter].sort(
                      (a, b) => a.population - b.population
                    )
                  };
            }
           
        default:
            return { ...state };

    }


};

export default rootReducer;