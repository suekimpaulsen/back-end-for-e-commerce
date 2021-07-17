const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
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
    tag_name: {
      type: DataTypes.STRING
  // tag_name:
  // - String / STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
