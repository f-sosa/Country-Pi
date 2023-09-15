import "./CountrySelected.css"
import { useDispatch } from "react-redux";
import { removeCountrySelect } from "../../redux/actions";
const CountrySelected = ({id, name, image}) => {
  const dispacth = useDispatch();

  const handleRemove = (id) => {
    event.preventDefault();
    dispacth(removeCountrySelect(id));
  }
  return (
    <div className="countrySelected">
     <img src={image}/>
     <p>{name}</p>
     <button onClick={()=>handleRemove(id)}>x</button>
     
    </div>
  );
};

export default CountrySelected;
