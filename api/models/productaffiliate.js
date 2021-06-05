"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductAffiliate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductAffiliate.init(
    {
      productId: DataTypes.INTEGER,
      affiliateId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductAffiliate",
    }
  );
  return ProductAffiliate;
};
