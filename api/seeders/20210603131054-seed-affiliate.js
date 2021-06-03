"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Affiliates",
      [
        {
          name: "Rafael",
          password: "123456",
          document: "111.222.111-22",
          city: "Feira de Santana",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Lavínia",
          password: "123456",
          document: "222.333.222-33",
          city: "Salvador",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Maurício",
          password: "123456",
          document: "333.444.333-44",
          city: "Feira de Santana",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Affiliates", null, {});
  },
};
