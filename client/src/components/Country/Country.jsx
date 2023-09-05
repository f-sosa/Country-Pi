import "./Country.css";
const Country = ({id, name, image, continent, capital, subregion, area, population}) => {

    return (
      <div className="container">
        <div className="card">
        <img src={image} alt="" />
        <div className="title">
        <h3>{id}</h3>
        <h3>{name}</h3>        
        <p>{continent}</p>
        <p>{capital}</p>
        <p>{subregion}</p>
        <p>{area}</p>
        <p>{population}</p>
        </div>
        </div>
      </div>
    );
  };
  export default Country;