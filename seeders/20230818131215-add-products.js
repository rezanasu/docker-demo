'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", 
      [
        {
          title: "Pisau",
          sku: "KITCHEN-001",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Microwave",
          sku: "KITCHEN-002",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Oven",
          sku: "KITCHEN-003",
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Baseball Bat",
          sku: "SPORT-001",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Bicycle",
          sku: "SPORT-002",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Running Shoe",
          sku: "SPORT-003",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    , {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
