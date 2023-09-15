import "./Activity.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import { getCountriesByName } from "../../redux/actions";
import { resetCountrryActivity } from "../../redux/actions";
import { useEffect } from "react";
import CountryActivity from "../CountryActivity/CountryActivity";
import CountrySelected from "../CountrySelected/CountrySelected";
import postActivity from "../../postActivity";
import validation from "../../validation";
import React from "react";

const Activity = () => {
  const dispacth = useDispatch();

  const countries = useSelector((state) => state.countryActivity);

  const countriesSelected = useSelector((state) => state.countrySelect);


  let dificult = 1;

  useEffect(() => {
    dispacth(getCountries());
  }, []);

  let count = 0;

  const [input, setInput] = React.useState({
    name: "",
    dificult: "1",
    season: "",
    duration: "",
    countries: [],
  });
  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const countryIDs = countriesSelected.map((country) => country.id);
    const body = {
      name: input.name,
      dificult: input.dificult,
      duration: input.duration,
      season: input.season,
      countries: countryIDs,
    };
    console.log(body);
    if(!body.name || !body.duration || !body.season || body.countries.length === 0){  

      alert("Please complete all fields");   

    } else {
    
  try {
    const result = await postActivity(body);
    alert(JSON.stringify(result.data));
    formulary.reset();
    dispacth(resetCountrryActivity());
  } catch (error) {
    alert(error);
  }
  
  }
  };
  const handleChange = (inputs) => {
   

    setInput({ ...input, [inputs.target.name]: inputs.target.value });

    setErrors(
      validation({ ...input, [inputs.target.name]: inputs.target.value })
    );

   if(inputs.target.name === "dificult"){

    const dificultElement = document.getElementById("value");

    dificultElement.innerHTML = inputs.target.value;
   }

   if(!countriesSelected){
    console.log("No contiene nada");
   }

  };

  const inputSearch = (event) => {
    const nameValue = event.target.value.trim();

    dispacth(getCountriesByName(nameValue));
  };

  return (
    <div className="activity">
      <div className="acti2">
        <h1>Create Activity</h1>

        <form action="" id="formulary">
          <div className="nameActivity">
            <input type="text" name="name" onChange={handleChange} />
            <label>Name Activity:</label>
          </div>
          {errors.e1 ? (<p style={{ color: 'red' }}>{errors.e1}</p>)
          :(<p></p>)}
          <br />
          <div className="box">
          <label>Dificult:</label>
            <div className="slider">
              <input
                type="range"
                name="dificult"
                value={input.dificult}
                onChange={handleChange}
                min="1"
                max="5"
              />             
            </div>
            <span className="value" id= "value">{dificult}</span>
          </div>
                    
          <div className="seasons">
            <h2>Seasons</h2>
            <label>
              <input
                type="radio"
                value="Verano"
                name="season"
                onChange={handleChange}
              />
              Summer
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Otoño"
                name="season"
                onChange={handleChange}
              />
              Fall
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Invierno"
                name="season"
                onChange={handleChange}
              />
              Winter
            </label>

            <br />
            <label>
              <input
                type="radio"
                value="Primavera"
                name="season"
                onChange={handleChange}
              />
              Spring
            </label>        
          </div>
          {errors.e2 ? (<p style={{ color: 'red' }}>{errors.e2}</p>)
          :(<p></p>)}

          <div className="time">
            <input type="time" name="duration" onChange={handleChange} />
            <label>Duration:</label>
          </div>
          {errors.e3 ? (<p style={{ color: 'red' }}>{errors.e3}</p>)
          :(<p></p>)}
          <br />
          <div className="search">
            Search:{" "}
            <input
              type="search"
              placeholder="Search countries.."
              onInput={inputSearch}
            />
         
          {countries.map((country) => {
            count++;
            if (count <= 5) {
              return (
                <CountryActivity
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  image={country.image}
                />
              );
            }
          })}
           </div>
          <br />
          <br />
          <div className="countriesSelected">
            <h4>Country Selected</h4>

            <div className="nameCountry">
              {countriesSelected.map((country) => {           
                return <CountrySelected key={country.id} id={country.id} name = {country.name} image = {country.image} />;
              })}
            </div>
          </div>
          <button onClick={handleSubmit} id = "btn" >Send</button>
        </form>
      </div>
    </div>
  );
};

export default Activity;
