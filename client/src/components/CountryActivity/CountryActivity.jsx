import "./CountryActivity.css";
import { useSelector, useDispatch } from "react-redux";
import { addCountryActivity } from "../../redux/actions";
import { removeCountryActivitySearch } from "../../redux/actions";
const CountryActivity = ({ id, name, image }) => {

    const dispacth = useDispatch();

    const example = useSelector((state) => state.countrySelect);

    const handleSubmit = async (id, name, image) => {
        
        event.preventDefault();           
        dispacth(addCountryActivity(id, name, image));
        dispacth(removeCountryActivitySearch(id));
        
    }
  return (
    <div>
      <div className="countryActivity">
        <h4>{name}</h4>
        <img src={image} alt="" />
        <button onClick={() => handleSubmit(id, name, image)}>Add country</button>
      </div>
    </div>
  );
};

export default CountryActivity;
