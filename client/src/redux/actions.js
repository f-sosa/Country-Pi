import { GET_COUNTRIES } from "./types.js";
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