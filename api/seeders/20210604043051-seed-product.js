"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Capa iPhone 8 Plus",
          price: 20.0,
          comission: 2.0,
          quantity: 14,
          description:
            "Capa para iPhone 8 Plus em couro. Perfeita para você que gosta de proteção sem perder sofisticação.",
          image_1:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHK2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1516659411314",
          image_2:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHK2_AV1_GOLD_GEO_BR?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1547675053317",
          image_3:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHK2_AV2_GEO_BR?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1547675705034",
          SupplierId: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
