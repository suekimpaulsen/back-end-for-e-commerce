// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  // product_name:
    // - String / STRING
    // - Doesn't allow null values / false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
  // price:
    // - Decimal / DECIMAL(10,2)
    // - Doesn't allow null values / false
    // - Validates that the value is a decimal / validate: { isDecimal: true }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '10',
      validate: {
        isNumeric: true
  // stock:
    // - Integer / INTEGER
    // - Doesn't allow null values / false
    // - Set a default value of 10 / defaultValue: '10'
    // - Validates that the value is numeric / validate: { isNumeric: true }
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
  // category_id:
    // - Integer / INTEGER
    // - References the category model's id / references: { model: 'category', key: 'id' }
      }
    }  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
