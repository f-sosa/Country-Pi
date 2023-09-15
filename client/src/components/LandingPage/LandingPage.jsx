import "./LandingPage.css";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  const handleJoin = () => {


  };

  return (
    <div className="LandingPage">
      <center>
      <h1>Welcome to the Countries!</h1>
      <h3>Create by: Sosa Franco</h3>
      <NavLink to="Home">
        <button className="button" onClick={handleJoin}>
          Join
        </button>       
        </NavLink>
      </center>
    </div>
  );
};
export default LandingPage;