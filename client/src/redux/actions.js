import { GET_COUNTRIES, GET_NAME, ORDER, POBLATION, CONTINENT, GET_ACTIVITIES, ACTIVITY, GET_COUNTRYBYID, ADD_COUNTRY_ACTIVITY, REMOVE_COUNTRY_ACTIVITY_SEARCH, RESET_COUNTRY_ACTIVITY, REMOVE_COUNTRY_SELECT } from "./types.js";
import axios from "axios";



export const getCountries = () => {
  const endpoint = 'http://localhost:3001/countries';

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCountriesByName = (name) => {
  const endpoint = 'http://localhost:3001/countries/name?name=' + name;

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getCountriesById = (id) => {
  const endpoint = 'http://localhost:3001/countries/' + id;

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_COUNTRYBYID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderAlphabetical = (order) => {

  return {
    type: ORDER,
    payload: order
  };

}

export const orderPoblation = (order) => {

  return {
    type: POBLATION,
    payload: order
  };

}
export const filterContinent = (filter) => {

  return {
    type: CONTINENT,
    payload: filter
  };

}
export const getActivities = () => {

  const endpoint = 'http://localhost:3001/activities';

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

}

export const filterActivity = (filter) => {

  return {
    type: ACTIVITY,
    payload: filter
  };
}

export const addCountryActivity = (id, name, image) => {

  return {
    type: ADD_COUNTRY_ACTIVITY,
    payload: { id, name, image }
  };
};

export const removeCountrySelect = (id) => {

  return {
    type: REMOVE_COUNTRY_SELECT,
    payload: id
  };

};

export const removeCountryActivitySearch = (id) => {

  return {
    type: REMOVE_COUNTRY_ACTIVITY_SEARCH,
    payload: id
  };

};
export const resetCountrryActivity = () => {

  return {
    type: RESET_COUNTRY_ACTIVITY
  };

};