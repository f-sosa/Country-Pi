const { Country, Activity } = require("../db");

module.exports = async (req, res) => {
    try {

        const { idPais } = req.params;

        const detail = await Country.findOne({ where: { id: idPais }, include: Activity });

        if(!detail) {

            return res.status(404).send("Country not found.")

        }
            return res.status(200).json(detail);

    } catch (error) {
        
            return res.status(500).send(error.message);
    }

}