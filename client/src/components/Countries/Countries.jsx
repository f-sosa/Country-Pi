import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Countries.css";
import { getCountries } from "../../redux/actions";
import Country from "../Country/Country";
const Countries = () => {

    const dispacth = useDispatch();
    const countries = useSelector((state) => state.countries);
    let count = 0;
    //Se ejecuta solamente una sola vez
    useEffect(() => {
      dispacth(getCountries());
      }, []);

    return (
      <div className="countries">
          {countries.map(country =>{
            count++;
            if(count <= 2){
              return(
                <Country
                  key={country.id}
                  id = {country.id}
                  name = {country.name}
                  image = {country.image}
                  continent = {country.continent}
                  capital = {country.capital}
                  subregion = {country.subregion}
                  area = {country.area}
                  population = {country.population}
                />
              )
              //se corta aca el if
            }
          })}
        </div>
    );
  };
  export default Countries;