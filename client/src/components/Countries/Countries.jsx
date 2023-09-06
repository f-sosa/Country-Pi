import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Countries.css";
import { getCountries } from "../../redux/actions";
import Country from "../Country/Country";
import Filter from "../Filters/Filter";
const Countries = () => {
  const dispacth = useDispatch();

  const countries = useSelector((state) => state.countriesFilter);

  let count = 0;
  //Se ejecuta solamente una sola vez
  useEffect(() => {
    dispacth(getCountries());
  }, []);

 
  return (
     
    <div className="countries">
      <Filter/>
      {countries.map((country) => {
        count++;
        if (count <= 10) {
          return (
            <Country
              key={country.id}
              name={country.name}
              image={country.image}
              continent={country.continent}
            />
          );
          //se corta aca el if
        }
      })}
    </div>
  );
};
export default Countries;
