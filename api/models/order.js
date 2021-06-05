"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      supplierid: DataTypes.INTEGER,
      affiliateId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Supplier, {
      foreignKey: "supplierId",
      as: "supplier",
    });
    Order.belongsTo(models.Affiliate, {
      foreignKey: "affiliateId",
      as: "affiliate",
    });
    Order.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return Order;
};
