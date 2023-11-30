const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blog_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    destination_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'destination',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
})

module.exports = Blog;