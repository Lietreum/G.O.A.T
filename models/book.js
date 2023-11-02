'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    judul: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    gambar: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};