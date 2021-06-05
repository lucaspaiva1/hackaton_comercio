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
          supplierId: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: "Smartphone Samsung Galaxy S21",
          price: 3499.99,
          comission: 159.9,
          quantity: 3,
          description: `Desenvolvido especialmente para quem ama tecnologia e fotos!

            O Smartphone Samsung Galaxy S21 oferece o que você precisa para tirar as melhores fotos e com a bateria que dura o dia todo.
            
            Com design moderno, conta com tela de 6.2" infinity-01, com tecnologia amoled 2x e proteção para conforto dos olhos, ideal para quem passa alguns horas no smartphone. Além disso, possui display Super Smooth de 120HZ. Já o processador Octa-Core 2.9GHz traz para você muito mais autonomia e velocidade.`,
          image_1:
            "https://images-soubarato.b2w.io/produtos/01/00/img/2875240/4/2875240402_1SZ.jpg",
          image_2:
            "https://images-soubarato.b2w.io/produtos/01/00/img/2875240/4/2875240402_2SZ.jpg",
          image_3:
            "https://images-soubarato.b2w.io/produtos/01/00/img/2875240/4/2875240402_6SZ.jpg",
          supplierId: 1,
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
