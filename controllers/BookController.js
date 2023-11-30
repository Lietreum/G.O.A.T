const { Book } = require("../models");

const findAllBooks = async (req, res) => {
  //ambil data dari database
  const data = await Book.findAll();

  //tampilkan
  res.json({
    message: "Ini dari router",
    data: data,
  });
  // res.status(200).json(data);
};

const detailBook = async (req, res) => {
  // // get id dari request
  // let id = parseInt(req.body.id);

  // //ambil data dari database
  // const data = await Book.findByPk(id);

  // //tampilkan
  // res.json({
  //   message: "Ini dari router",
  //   data: data,
  // });

  try {
    const response = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const tambahBuku = async (req, res) => {
  try {
    //ambil data dari request
    const data = req.body;

    //insert kedatabase
    const result = await Book.create(data);

    //tampilkan status
    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

const hapusBuku = async (req, res) => {
  try {
    //ambil data dari request
    const id = req.params.id;

    //hapus data dari database
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });

    //tampilkan status
    res.json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

const ubahBuku = async (req, res) => {
  try {
    //ambil data dari request
    const id = req.body.id;

    const newData = req.body;

    //ubah data dari database
    const result = await Book.update(newData, {
      where: {
        id: id,
      },
    });

    //tampilkan status dan data baru
    res.json({
      message: "Data berhasil dirubah",
      data: newData,
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

module.exports = { findAllBooks, detailBook, tambahBuku, hapusBuku, ubahBuku };