import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="header">
      <NavLink to="Home">
        {" "}
        <button>Home</button>
      </NavLink>
      <SearchBar />
      <NavLink to="Activity">
        {" "}
        <button>Activity</button>
      </NavLink>
    </div>
  );
};
export default Nav;
