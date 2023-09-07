import "./Detail.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesById } from "../../redux/actions";
import ActivitiesByCountry from "../ActivitiesByCountry/ActivitiesByCountry";
const Detail = () => {
  const { id } = useParams();
  const dispacth = useDispatch();

  const detail = useSelector((state) => state.countryDetail);


  useEffect(() => {
    dispacth(getCountriesById(id));
  }, []);

  return (
    <div className="detail">
      <ul>
        <div className="body">
          <h1>{detail.name}</h1>
          <img
            src={detail.image}
            alt="Una persona disfrutando de la playa en un día soleado"
          />
        </div>
        <div className="content">
          <h3>Detail</h3>
          <h3>Id : {detail.id}</h3>
          <h3>Continent : {detail.continent}</h3>
          <h3>Capital : {detail.capital}</h3>
          <h3>Subregion : {detail.subregion}</h3>
          <h3>Area : {detail.area}</h3>
          <h3>Poblation : {detail.population}</h3>
        </div>
      </ul>
      <ul>
  <div className="activities">
  <h1>Activities:</h1>
    {detail.Activities.length > 0 ?  (
        
     detail.Activities.map((activity) => (
        <ActivitiesByCountry
          key={activity.id}
          id={activity.id}
          name={activity.name}
          dificult={activity.dificult}
          duration={activity.duration}
          season={activity.season}
        />
      ))
    ) : (
      <h1> No activities available</h1>
    )}
  </div>
</ul>
    </div>
  );
};

export default Detail;
