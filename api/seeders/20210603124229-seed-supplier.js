"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          name: "Elias",
          password: "123456",
          document: "111.111.111-11",
          city: "Feira de Santana",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Marcelo",
          password: "123456",
          document: "222.222.222-22",
          city: "Salvador",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Brenda",
          password: "123456",
          document: "333.333.333-33",
          city: "Feira de Santana",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Suppliers", null, {});
  },
};
