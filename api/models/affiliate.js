"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Affiliate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Affiliate.init(
    {
      name: DataTypes.STRING,
      document: DataTypes.STRING,
      password: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Affiliate",
    }
  );

  Affiliate.associate = function (models) {
    Affiliate.belongsToMany(models.Product, {
      through: "ProductAffiliate",
      foreignKey: "affiliateId",
      as: "products",
    });
  };

  return Affiliate;
};
