import "./CountryActivity.css";
import { useSelector, useDispatch } from "react-redux";
import { addCountryActivity } from "../../redux/actions";
import { removeCountryActivity } from "../../redux/actions";
const CountryActivity = ({ id, name, image }) => {

    const dispacth = useDispatch();

    const example = useSelector((state) => state.countrySelect);

    const handleSubmit = async (id) => {
        
        event.preventDefault();           
        dispacth(addCountryActivity(id));
        dispacth(removeCountryActivity(id));
        console.log(example);
    }
  return (
    <div>
      <div className="countryActivity">
        <h4>{name}</h4>
        <img src={image} alt="" />
        <button onClick={() => handleSubmit(id)}>Add country</button>
      </div>
    </div>
  );
};

export default CountryActivity;
