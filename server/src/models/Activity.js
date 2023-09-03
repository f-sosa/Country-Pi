const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[A-Za-z\s]+$/,
            }
        },
        dificult: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false,

        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },

    },{ timestamps: false });
};