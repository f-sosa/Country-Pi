import "./LandingPage.css";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  const handleJoin = () => {


  };

  return (
    <div className="LandingPage">
      <center>
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