'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        judul: 'harry potter',
        penerbit: 'Bloomsbury',
        deskripsi: 'Novel ini menceritakan seorang penyihir muda bernama Harry Potter yang menemukan warisan magisnya pada hari ulang tahunnya yang kesebelas, ketika ia menerima surat penerimaan ke Sekolah Sihir Hogwarts. Harry Potter ternyata sangat terkenal di dunia sihir sehingga menyebabkan ada pihak yang mengelu-elukannya namun ada pula yang membencinya.',
        gambar: "harrypotter.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};