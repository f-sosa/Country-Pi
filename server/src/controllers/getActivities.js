const { Activity, Country } = require("../db");

module.exports = async (req, res) => {

    try {
        let activity = await Activity.findAll({
            include: Country
        });
        
        if (activity.length === 0) {

            return res.status(400).send("There isn't any activities");

        } else {
            return res.status(200).json(activity);
        }

    } catch (error) {
            return res.status(500).send(error.message);
    }

};