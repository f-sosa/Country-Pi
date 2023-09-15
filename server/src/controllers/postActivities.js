const { Activity, Country } = require("../db");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
    try {
        const { name, dificult, duration, season, countries } = req.body;
        let success = {
            repeat: ""
        };
      
        if (!name || !dificult || !duration || !season) {

            return res.status(401).send('The data is insufficient '+ "Name: " + name + " Dificult: " + dificult + " Duration: "+ duration+ " Season: "+ season);

        }
        const [activity, created] = await Activity.findOrCreate({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            defaults: {
                name,
                dificult,
                duration,
                season,
            },
        });
        if (!created) {
            success.repeat = "This name already in the database";
        } else {
            success.repeat = "This activity has been add in the database";
        }

        countries.map(async (country) => {

            const countryObj = await Country.findOne(
                {
                    where: { id: country }
                }
            )

             await activity.addCountry(countryObj);
            
        })
        
        return res.status(200).send(success.repeat);

    } catch (error) {
        return res.status(500).send(error.message);
    }


};
