import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Countries from "./components/Countries/Countries"
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? (
        <LandingPage/>
      ) : (
        <Nav/>
      )}
      <Routes>
      <Route path="/Home" element={<Countries/>}/>
      </Routes>
    </div>
  );
}

export default App;
