import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import { orderAlphabetical } from "../../redux/actions";
import { orderPoblation } from "../../redux/actions";
import { filterContinent } from "../../redux/actions";
import { filterActivity } from "../../redux/actions";
import { getActivities } from "../../redux/actions";
const Filter = () => {
    const dispatch = useDispatch();

    const activities = useSelector((state) => state.activities);

    const handleOrder = (value) => { 
        dispatch(orderAlphabetical(value.target.value));
      }

      const handlePoblation = (value) => { 
        dispatch(orderPoblation(value.target.value));
      }

      const handleContinent = (value) => { 
        dispatch(filterContinent(value.target.value));
      }
      const handleActivity = (value) => { 
        dispatch(filterActivity(value.target.value));
      }

      useEffect(() => {
        dispatch(getActivities());
      }, []);

    return (
      <div className="filter">
        <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handlePoblation}>
          <option value="M">Mayor</option>
          <option value="ME">Menor</option>
        </select>
        <select onChange={handleContinent}>
          <option value="Asia">Asias</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select onChange={handleActivity}>
          {activities.map(element =>(
            <option key={element.id} value = {element.id}>{element.name}</option>
          )            
            )}
        </select>
        </div>
      </div>
    );
  };
  export default Filter;