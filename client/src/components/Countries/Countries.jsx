import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Countries.css";
import { getCountries } from "../../redux/actions";
const Countries = () => {

 //   const dispacth = useDispatch();
   // const countries = useSelector((state) => state.countries);

    /*countries.map((country) => {
        console.log(country.id);
        
    })
    //Se ejecuta solamente una sola vez
    useEffect(() => {
      dispacth(getCountries());
      }, []);
*/
    return (
      <div className="countries">
        <div className="content">
        <h1>Holaa</h1>
        </div>
      </div>
    );
  };
  export default Countries;