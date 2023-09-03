const { Country, Activity } = require("../db");
const api = require("../../api/db.json");
module.exports = async (req, res) => {

    //Hacemos una consulta a la base de datos para saber si hay datos en las tablas 
    let countries = await Country.findAll();
    // Obtenemos los datos en la api
    const countriesFromApi = api.countries;
    //Preguntamos si en la base de datos no hay datos
    if (countries.length === 0) {
        //Recorremos la api
        for (const country of countriesFromApi) {
            //Hay algunos nombres que estan en undefined entonces queremos los que no estan undefined
            if (country.fifa !== undefined) {
                let cap;
                //Hay algunos paises que no tienen capitales por ende preguntamos si  tienen capital
                if (country.capital && country.capital[0] !== undefined) {
                    cap = country.capital && country.capital[0];

                } else {
                    //Caso contrario se le carga el nombre del pais como capital
                    cap = country.name.common
                }


                try {
                    //Preguntamos si existe, si no, lo crea
                    await Country.findOrCreate({
                        where: {
                            id: country.fifa,
                            name: country.name.common,
                            image: country.flags.png,
                            continent: country.region,
                            capital: cap,
                            subregion: country.subregion,
                            area: country.area,
                            population: country.population,
                        }
                    });


                } catch (error) {
                    return res.status(500).send(error.message);
                }
            }
        }
    }
    //Llamamos de vuelta a la base de datos con los datos ya cargados
    countries = await Country.findAll();
    //Devolvemos los objetos
    return res.status(200).json(countries);
};