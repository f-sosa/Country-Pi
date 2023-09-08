import "./Activity.css";
import axios from "axios";
import React from "react";
const Activity = () => {
  const [input, setInput] = React.useState({
    name: "",
    dificult: "",
    season: "",
    duration: "",
    countries: [],
  });
  const handleSubmit = async (event) => {
    setInput({
      ...input,
      countries: [...input.countries, "BRA", "ARG", "COL", "VEN"],
    });
    event.preventDefault();
    console.log(input.countries);

    //Anda
    /*
  const body = {
    name: input.name,
    dificult: input.dificult,
    duration: input.duration,
    season: input.season,
    countries: input.countries,
  }
  console.log(body);
  
  try {
    const endpoint = 'http://localhost:3001/activities';
    const result = await axios.post(endpoint, body);
    // Aquí puedes manejar la respuesta de la petición, si es necesario.
    console.log(result.data); // Ejemplo: muestra los datos de la respuesta en la consola
  } catch (error) {
    // Aquí puedes manejar los errores de la petición.
    console.error(error);
  }
 */
  };
  const handleChange = (inputs) => {
    setInput({ ...input, [inputs.target.name]: inputs.target.value });
  };

  return (
    <div className="activity">
      <div className="acti2">
        <h1>Create Activity</h1>

        <form action="">
          <div className="nameActivity">
            <input type="text" name="name" onChange={handleChange} />
            <label>Name Activity:</label>
          </div>
          <div className="nameActivity">
            <input type="text" name="dificult" onChange={handleChange} />
            <label>Dificult:</label>
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

          <div>
            <input type="time" name="duration" onChange={handleChange} />
            <label>Duration:</label>
          </div>

          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Activity;
