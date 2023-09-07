import "./Country.css";
import { Link } from "react-router-dom";
const Country = ({ id, name, image, continent }) => {
  return (
    <div className="card">  
      <div className="face front">
        <img src={image} alt="" />
        <h3>{name}</h3>
      </div>
      <div className="face back">
        <h3>{name}</h3>
        <p>{continent}</p>
        <div className="link">
        <Link to={`/detail/${id}`}>
            {" "}
            <p>Detail</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Country;
