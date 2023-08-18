'use strict';

const {Product} = require("../models")

module.exports = {
  async up (queryInterface, Sequelize) {

    const categories = await queryInterface.bulkInsert("Categories", 
      [ 
        {
          title: "Kitchen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Sport",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {returning: true}
    )
    
    const kitchen = categories[0];
    const sport = categories[1];

    const products = await Product.findAll();

    const k1 = products[0];
    const k2 = products[1];
    const k3 = products[2];

    const s1 = products[3];
    const s2 = products[4];
    const s3 = products[5];


    await queryInterface.bulkInsert("ProductCategories", 
      [
        {
          product_id: k1.id,
          category_id: kitchen.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: k2.id,
          category_id: kitchen.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: k3.id,
          category_id: kitchen.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: s1.id,
          category_id: sport.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: s2.id,
          category_id: sport.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          product_id: s3.id,
          category_id: sport.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
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
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("ProductCategories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
