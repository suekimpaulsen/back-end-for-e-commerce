const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
        // product_id:
        // - Integer / INTEGER
        // - References the product model's id / reference: { model: 'product', key: 'id' }
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
  // tag_id:
  // - Integer / INTEGER
  // - References the tag model's id / reference: { model: 'tag', key: 'id' }
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
