const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//Compares Login Password to Encrypted Password in db!!
class User extends Model {
  checkPassword(loginPass) {
    return bcrypt.compareSync(loginPass, this.password);
  }
}

//Creating the User Model
User.init(
    {
        //This will export to other Models
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            //util for id???
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true,
            // },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    },
    {
        hooks: {
            //PUT HOOKS HERE IF WE WANT HOOKS
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;