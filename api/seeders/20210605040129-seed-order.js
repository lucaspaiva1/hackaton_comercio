"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orders",
      [
        {
          productId: 1,
          supplierId: 1,
          affiliateId: 1,
          quantity: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          productId: 2,
          supplierId: 1,
          affiliateId: 1,
          quantity: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orders", null, {});
  },
};
