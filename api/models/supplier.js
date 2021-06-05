"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      document: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      district: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Supplier",
    }
  );

  Supplier.associate = (models) => {
    Supplier.hasMany(models.Order, {
      foreignKey: "supplierId",
      as: "orders",
    });
  };

  return Supplier;
};
