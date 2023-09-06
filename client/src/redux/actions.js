import { GET_COUNTRIES, GET_NAME, ORDER, POBLATION } from "./types.js";
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
    const endpoint = 'http://localhost:3001/countries/name?name='+name;
  
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