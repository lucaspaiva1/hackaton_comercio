"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          name: "Elias Acessórios",
          password: "123456",
          document: "111.111.111-11",
          address: "Av. Maria Quitéria",
          number: "12",
          district: "Centro",
          city: "Feira de Santana - BA",
          phone: "(75) 3624-4759",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Polimodas",
          password: "123456",
          document: "222.222.222-22",
          address: "Av. Tancredo Neves",
          number: "300",
          district: "Caminho das Árvores",
          city: "Salvador - BA",
          phone: "(71) 3623-0001",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "CrisJóias",
          password: "123456",
          document: "333.333.333-33",
          address: "Av. Maria Quitéria",
          number: "5160",
          district: "Parque Ipê",
          city: "Feira de Santana - BA",
          phone: "(75) 3021-5497",
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
