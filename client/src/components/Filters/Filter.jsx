import "./Filter.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, orderAlphabetical } from "../../redux/actions";
import { orderPoblation } from "../../redux/actions";
import { filterContinent } from "../../redux/actions";
import { filterActivity } from "../../redux/actions";
import { getActivities } from "../../redux/actions";
const Filter = () => {

  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  const handleOrder = (value) => {
    dispatch(orderAlphabetical(value.target.value));
  };

  const handlePoblation = (value) => {
    dispatch(orderPoblation(value.target.value));
  };

  const handleContinent = (value) => {
    dispatch(filterContinent(value.target.value));
  };

  const handleActivity = (value) => {
    dispatch(filterActivity(value.target.value));
  };

  const handleReset = () => {

    dispatch(getCountries());
  }

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div>
      <div className="filter">

        <h3>Alphabetically:</h3>

        <div className="select">
          <select onChange={handleOrder}>
            <option selected disabled>
              Choose
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <h3>By Population:</h3>
        <div className="select">      
          <select onChange={handlePoblation}>
          <option selected disabled>
              Choose
            </option>
            <option value="ASC">Asc</option>
            <option value="DESC">Desc</option>
          </select>
        </div>

        <h3>By Continent:</h3>
        <div className="select"> 
          <select onChange={handleContinent}>
            <option selected disabled>
              Choose
            </option>
            <option value="Asia">Asias</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <h3>By Activity:</h3>
        <div className="select">
          <select onChange={handleActivity}>
            <option selected disabled>
              Choose
            </option>
            {activities.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
                <button onClick={handleReset}>Clean filters</button>
      </div>
    </div>
  );
};
export default Filter;
