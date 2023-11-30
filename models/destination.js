const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Destination extends Model {}

Destination.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    destination_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'destination'
})

module.exports = Destination;