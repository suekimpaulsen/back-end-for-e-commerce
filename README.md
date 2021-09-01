# Back End for E-Commerce
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Table of Contents
* [How it works](#how-it-works)
* [Features](#features)
* [Technoliges Used](#technologies-used)
* [Walkthrough Video](#walkthrough-video)

## How it works:
- When I open API GET routes in Insomnia Core for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON
- When I test API POST, PUT, and DELETE routes in Insomnia Core, I am able to successfully create, update, and delete data in my database


## Features:
- When I enter schema and seed commands, a development database is created and is seeded with test data
- When I enter the command to invoke the application, my server is started and the Sequelize models are synced to the MySQL database


## Technologies Used:

1. Sequelize
### Example:
```javascript
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
product_id: {
    type: DataTypes.INTEGER,
    references: {
    model: 'product',
    key: 'id'
    }
},
tag_id: {
    type: DataTypes.INTEGER,
    references: {
    model: 'tag',
    key: 'id'
    }
}
```

2. dotenv
```
DB_NAME='ecommerce_db'
DB_USER='****'
DB_PW='******'
```

## Walkthrough Video
coming soon

