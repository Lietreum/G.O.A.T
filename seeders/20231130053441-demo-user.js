"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama: "Ilham",
        alamat: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Ghina",
        alamat: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Rara",
        alamat: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Ibrahim",
        alamat: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};