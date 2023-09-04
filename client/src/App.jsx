import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Countries from "./components/LandingPage/Countries/Countries";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
