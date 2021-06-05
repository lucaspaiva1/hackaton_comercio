"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ProductAffiliates",
      [
        {
          productId: 1,
          affiliateId: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          productId: 2,
          affiliateId: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProductAffiliates", null, {});
  },
};
