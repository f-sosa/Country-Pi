const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      len: [1, 3],
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[\p{L}\s',.\-]+$/u 
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[\p{L}\s',.\-]+$/u
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[\p{L}\s',.\-]+$/u 
      }
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[\p{L}\s',.\-]+$/u 
      }
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

  },{ timestamps: false });
};