import React from "react";
import "./SearchBar.css";
import {useDispatch} from "react-redux";
import { getCountriesByName } from "../../redux/actions";
const SearchBar = () => {

  const dispatch = useDispatch();

  const inputSearch = (event) =>{
    const nameValue = event.target.value.trim();
 
    dispatch(getCountriesByName(nameValue));

  }
    return (
      <div className="searchbar">
         <input type='search' id="txtSearch" placeholder="Search your country here.." onInput={inputSearch}/>
      </div>
    );
  };
  export default SearchBar;