import { GET_COUNTRIES, GET_NAME, ORDER, POBLATION, CONTINENT, GET_ACTIVITIES, GET_COUNTRYBYID, ACTIVITY, ADD_COUNTRY_ACTIVITY, REMOVE_COUNTRY_ACTIVITY } from "./types";
const initialState = {
  countries: [],
  countriesFilter: [],
  countryDetail: [],
  countryActivity: [],
  countrySelect: [],
  activities: []
};
const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload, countriesFilter: action.payload, countryActivity: action.payload };

    case GET_NAME:
      return { ...state, countriesFilter: action.payload, countryActivity: action.payload };

    case GET_COUNTRYBYID:
      return { ...state, countryDetail: action.payload };

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
    case CONTINENT:
      return {
        ...state,
        countriesFilter: state.countries.filter((list) => list.continent === action.payload)
      };
    case ACTIVITY:
      return {
        ...state,
        countriesFilter: state.countries.filter((country) => {
          return country.Activities.some((activity) => activity.id === Number(action.payload));
        }),
      };
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case ADD_COUNTRY_ACTIVITY:

      return {
        ...state,
        countrySelect: [...state.countrySelect, action.payload],
        
      };

      case REMOVE_COUNTRY_ACTIVITY:

      return {
        ...state,
        countryActivity: state.countryActivity.filter(country => country.id !== action.payload)
      };

    default:
      return { ...state };

  }


};

export default rootReducer;