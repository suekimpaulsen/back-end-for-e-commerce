const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    // id:
      // - Integer / INTEGER
      // - Doesn't allow null values / false
      // - Set as primary key / true
      // - Uses auto increment / true
    },
    // define a category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    // category_name
      // - String / STRING
      // - Doesn't allow null values / false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
