const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;

    const countrys = await Country.findAll({
        where: {
        name: {
        [Op.iLike]: `%${name}%`
        }
      },
      include: Activity
    });
    
    if (countrys.length === 0) {

      return res.status(404).send("Country not found.")

    }
    
      return res.status(200).json(countrys);

  } catch (error) {

      return res.status(500).send("error.message");

  }



};