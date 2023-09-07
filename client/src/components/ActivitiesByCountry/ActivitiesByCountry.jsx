import "./ActivitiesByCountry.css"
const ActivitiesByCountry = ({ id, name, dificult, duration, season }) => {
   
    return (
      <div className="activitiesbycountry">
        <h3>Id: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Dificult: {dificult}</h3>
        <h3>Duration: {duration}</h3>
        <h3>Season: {season}</h3>
      </div>
    );
  };
  
  export default ActivitiesByCountry;