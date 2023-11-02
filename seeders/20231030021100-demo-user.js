'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        nama: 'Jalu',
        alamat: 'Regol',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      nama: 'raju',
      alamat: 'ciseuruh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'papai',
      alamat: 'polo',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
