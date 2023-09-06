import { useDispatch} from "react-redux";
import { orderAlphabetical } from "../../redux/actions";
import { orderPoblation } from "../../redux/actions";
const Filter = () => {
    const dispatch = useDispatch();
    const handleOrder = (value) => { 
        dispatch(orderAlphabetical(value.target.value));
      }
      const handlePoblation = (value) => { 
        dispatch(orderPoblation(value.target.value));
      }
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
        </div>
      </div>
    );
  };
  export default Filter;