"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.STRING,
      comission: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      image_1: DataTypes.TEXT,
      image_2: DataTypes.TEXT,
      image_3: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Supplier);
  };

  return Product;
};
